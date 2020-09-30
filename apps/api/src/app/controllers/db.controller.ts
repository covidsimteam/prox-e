
import { EventEmitter } from 'events';
import PouchDB from 'pouchdb';
import { Body, Controller, Post, Route, Tags, Response } from 'tsoa';
import motherLogger from '../logger';

export interface DBList {
    [dbId: string]: {
        name: string,
        instance?: PouchDB.Database,
        remoteInstance?: PouchDB.Database,
        listener?: EventEmitter,
    };
}

export interface ExistingDoc {
    _id: string;
    _rev: string;
    [key: string]: any;
}

export type Doc = Partial<ExistingDoc>;


export interface DBPostResponse {
    id: string;
    ok: boolean;
    rev: string;
}

interface ErrorResponse {
    status?: number;
    name?: string;
    message?: string;
    reason?: string;
    error?: string | boolean;
    id?: string;
    rev?: string;
}

export type BulkAddResponse = (DBPostResponse | ErrorResponse)[];

export interface DBErrorResponse {
    error: string;
    reason: string;
}


export enum Databases {
    covidsimteam = 'covidsimteam',
    returnees = 'foreign_returnees',
    spatial = 'nepal_spatial',
    pcr_tests = 'pcr_tests',
    rdt_tests = 'rdt_tests',
    audit = 'usage_audit',
    matrix = 'matrix',
    roles = 'roles',
    history = 'history',
    default = 'default',
    sessions = 'sessions',
    districts = 'districts',
    exchange = 'exchange'
}

export class ProxyCouchService {

    protected readonly fslogger = motherLogger.child({ file: 'ProxyCouchService' });

    private databases: DBList = {};

    private static proxyCouchServiceInstance: ProxyCouchService;

    constructor() {

        Object.values(Databases).forEach((dbName) => {
            this.databases[dbName] = { name: dbName, listener: new EventEmitter() };
        });

        if (!ProxyCouchService.proxyCouchServiceInstance) {
            ProxyCouchService.proxyCouchServiceInstance = this;
        }
        return ProxyCouchService.proxyCouchServiceInstance;
    }

    public instance(dbName: Databases): PouchDB.Database<{}> | undefined {
        if (this.getDBInstance(dbName)) return this.getDBInstance(dbName);
        return (this.databases[dbName].instance = new PouchDB(this.databases[dbName].name));
    }

    private getDBInstance(dbName: Databases): PouchDB.Database<{}> | undefined {
        return this.databases[dbName]?.instance;
    }

    getRemoteDBInstance(dbName: Databases): PouchDB.Database<{}> | undefined {
        return this.databases[dbName]?.remoteInstance;
    }

    getChangeListener(dbName: Databases): EventEmitter | undefined {
        return this.databases[dbName]?.listener || undefined;
    }

    async get(dbName: Databases, id: string): Promise<any | undefined> {
        try {
            return await this.getDBInstance(dbName)?.get(id);
        } catch (error) {
            return this.getRemoteDBInstance(dbName)?.get(id);
        }
    }

    /**
     * Unlike other create/update actions, bulk updates are tried first on the remote if available
     * for fail fast response directly from the SSOT.
     * TODO reverse this behavior for cases with very large payloads
    */
    async addAll(dbName: Databases, docs: Doc[]): Promise<BulkAddResponse | undefined> {
        const remoteDB = this.getRemoteDBInstance(dbName);
        const localDB = this.instance(dbName);

        if (!remoteDB) return localDB?.bulkDocs(docs);

        try {
            await remoteDB?.info(); // throws error with status: 404 if not available
        } catch (error) {
            return localDB?.bulkDocs(docs);
        }

        return remoteDB?.bulkDocs(docs);
    }

    async getAll(dbName: Databases): Promise<any | undefined> {
        const remoteDB = this.getRemoteDBInstance(dbName);
        const localDB = this.instance(dbName);

        if (localDB) return localDB.allDocs();

        return remoteDB?.allDocs();
    }

    /**
     * Use only when the id of the doc is not relevant for its access patterns/queries
    */
    protected async createUsingPost(dbName: Databases, doc: Doc): Promise<any> {
        const dbInstance = this.getDBInstance(dbName);
        try {
            return await dbInstance?.post(doc);
        } catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }

    /**
     * Use this in most cases for creating a doc and make sure to assign a unique _id field yourself.
    */
    async create(dbName: Databases, doc: ExistingDoc): Promise<any> {
        const dbInstance = this.getDBInstance(dbName);
        try {
            return await dbInstance?.put(doc);
        } catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }

    /**
     * Use when updating a doc whose current revision string is not known yet or is likely to have changed.
    */
    async update(dbName: Databases, doc: ExistingDoc): Promise<any> {
        const dbInstance = this.getDBInstance(dbName);
        try {
            const result = await this.get(dbName, doc._id);
            doc._rev = result._rev;
            return dbInstance?.put(doc);
        } catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }

    protected async delete(dbName: Databases, doc: ExistingDoc): Promise<any> {
        try {
            const result = await this.get(dbName, doc._id);
            doc._rev = result._rev;
            doc._deleted = true;
            return this.update(dbName, doc);
        } catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }

    async getUser() { }

}

export interface AddToDSuccess {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AddToDFailure extends Error {
    name: 'session' | 'confict' | 'connection' | string;
    message: string;
    stack?: string;
}

export interface AddToDResponse extends AddToDFailure, AddToDSuccess {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    message: string;
    stack?: string;
}

export type DbResponse = AddToDResponse;

export enum DbOption {
    createDoc = 0,
    updateDoc = 1
}

@Route('db')
export class DbController extends Controller {

    private db: ProxyCouchService;

    constructor() {
        super();
        this.db = new ProxyCouchService();
    }

    @Tags('db')
    @Post('create')
    @Response<AddToDFailure>(401, "Document add failed")
    @Response<AddToDSuccess>(201, "Document add succeeded")
    public async createDoc(@Body() payload: any): Promise<DbResponse> {
        return this.action(DbOption.createDoc, payload);
    }

    @Tags('db')
    @Post('upload')
    @Response<AddToDFailure>(401, "Document update failed")
    @Response<AddToDSuccess>(201, "Document update succeeded")
    public async updateDoc(@Body() payload: any): Promise<DbResponse> {
        return this.action(DbOption.updateDoc, payload);
    }

    private action(option: DbOption, payload: ExistingDoc): Promise<DbResponse> {
        const createDocFromPayload = (pay: ExistingDoc) => this.db.create(Databases.sessions, pay);
        const updateDocWithPayload = (pay: ExistingDoc) => this.db.update(Databases.sessions, pay); 
        switch (+option) {
            case DbOption.createDoc:
                return createDocFromPayload(payload);
            case DbOption.updateDoc:
            default:
                return updateDocWithPayload(payload);
        }
    }


    // @Tags('db')
    // @Post('download')
    // @Response<DownloadFailure>(401, "Folder creation failed")
    // @Response<DownloadSuccess>(201, "Folder creation succeeded")
    // public async download(@Body() payload: [string, string]): Promise<DownloadResponse>{
    //   return this.action(FileOption.download, payload) as Promise<DownloadResponse>;
    // }


}