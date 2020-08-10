import { EventEmitter, Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchAuth from 'pouchdb-authentication';
import { Database, DBList, Doc, ExistingDoc } from '../../models/domain.model';
import { AuthService } from '../auth/auth.service';
import { EnvironmentService } from '../env/environment.service';
import { LoggingService } from '../logging.service';
import { BulkAddResponse } from '../../models/db/response.model';
import { from } from 'rxjs';

PouchDB.plugin(PouchAuth);

@Injectable({
  providedIn: 'root',
})
export class PouchDBService {
  private databases: DBList = {};

  constructor(
    private environment: EnvironmentService,
    private logger: LoggingService,
    private authService: AuthService,
  ) {
    Object.values(Database).forEach((dbName) => {
      this.databases[dbName] = { name: dbName, listener: new EventEmitter() };
    });
  }

  public instance(dbName: Database): PouchDB.Database {
    if (this.getDBInstance(dbName)) return this.getDBInstance(dbName);
    return (this.databases[dbName].instance = new PouchDB(this.databases[dbName].name));
  }

  private getDBInstance(dbName: Database): PouchDB.Database {
    return this.databases[dbName].instance;
  }

  getRemoteDBInstance(dbName: Database): PouchDB.Database {
    return this.databases[dbName].remoteInstance;
  }

  getChangeListener(dbName: Database): EventEmitter<any> {
    return this.databases[dbName].listener;
  }

  async get(dbName: Database, id: string): Promise<any> {
    try {
      return await this.getDBInstance(dbName).get(id);
    } catch (error) {
      return this.getRemoteDBInstance(dbName).get(id);
    }
  }

  /**
   * Unlike other create/update actions, bulk updates are tried first on the remote if available
   * for fail fast response directly from the SSOT.
   * TODO reverse this behavior for cases with very large payloads
  */
  async addAll(dbName: Database, docs: Doc[]): Promise<BulkAddResponse> {
    const remoteDB = this.getRemoteDBInstance(dbName);
    const localDB = this.instance(dbName);

    if (!remoteDB) return localDB.bulkDocs(docs);

    try {
      await remoteDB.info(); // throws error with status: 404 if not available
    } catch (error) {
      return localDB.bulkDocs(docs);
    }

    return remoteDB.bulkDocs(docs);
  }

  async getAll(dbName: Database): Promise<any> {
    const remoteDB = this.getRemoteDBInstance(dbName);
    const localDB = this.instance(dbName);

    if (localDB) return localDB.allDocs();

    return remoteDB.allDocs();
  }

  /**
   * Use only when the id of the doc is not relevant for its access patterns/queries
  */
  async createUsingPost(dbName: Database, doc: Doc): Promise<any> {
    const dbInstance = this.getDBInstance(dbName);
    try {
      return await dbInstance.post(doc);
    } catch (error) {
      return new Promise((_, reject) => reject(error));
    }
  }

  /**
   * Use this in most cases for creating a doc and make sure to assign a unique _id field yourself.
  */
  async create(dbName: Database, doc: ExistingDoc): Promise<any> {
    const dbInstance = this.getDBInstance(dbName);
    try {
      return await dbInstance.put(doc);
    } catch (error) {
      return new Promise((_, reject) => reject(error));
    }
  }

  /**
   * Use when updating a doc whose current revision string is not known yet or is likely to have changed.
  */
  async update(dbName: Database, doc: ExistingDoc): Promise<any> {
    const dbInstance = this.getDBInstance(dbName);
    try {
      const result = await this.get(dbName, doc._id);
      doc._rev = result._rev;
      return dbInstance.put(doc);
    } catch (error) {
      return new Promise((_, reject) => reject(error));
    }
  }

  async delete(dbName: Database, doc: ExistingDoc): Promise<any> {
    try {
      const result = await this.get(dbName, doc._id);
      doc._rev = result._rev;
      doc._deleted = true;
      return this.update(dbName, doc);
    } catch (error) {
      return new Promise((_, reject) => reject(error));
    }
  }

  remoteLogin(dbName: Database): PouchDB.Database {
    if (this.getRemoteDBInstance(dbName)) return this.getRemoteDBInstance(dbName);

    const remoteDB = new PouchDB(`${this.environment.dbUri}/${dbName}`, {
      skip_setup: true,
    });

    if (!this.authService.isAuthenticated) return;

    from(remoteDB.logIn(this.authService.user, this.authService.pass)).subscribe(_ => {
      this.databases[dbName].remoteInstance = remoteDB;
    });

    return this.getRemoteDBInstance(dbName);
  }

  remoteSync(dbName: Database): EventEmitter<any> {
    if (this.getRemoteDBInstance(dbName)) return this.getChangeListener(dbName);

    const dbMeta = this.databases[dbName];
    const remoteDB = new PouchDB(`${this.environment.dbUri}/${dbName}`, {
      skip_setup: true,
    });

    if (!this.authService.isAuthenticated) return;

    const localDB = dbMeta.instance ? dbMeta.instance : this.instance(dbName);

    const emitOnChange = (change: any) => dbMeta.listener.emit(change);

    from(remoteDB.logIn(this.authService.user, this.authService.pass))
        .subscribe(_ => {

          this.databases[dbName].remoteInstance = remoteDB;

          localDB.sync(remoteDB, { live: true })
            .on('change', emitOnChange)
            .on('complete', emitOnChange)
            .on('error', (err: any) => this.logger.error(err));

          this.databases[dbName].listener = dbMeta.listener;
        });

    return dbMeta.listener;
  }
}
