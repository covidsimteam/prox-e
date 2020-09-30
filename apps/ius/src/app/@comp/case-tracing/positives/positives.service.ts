import { EventEmitter, Injectable } from '@angular/core';
import { AllDocs } from '../../../@models/db/all-docs.model';
import { ExistingDoc, Databases, Doc } from '../../../@models/domain.model';
import { DBService } from '../../../services/db/db.service.interface';
import { PouchDBService } from '../../../services/db/pouchdb.service';
import { PSchema } from '../../../@models/db/schema/pschema.model';
import { BulkAddResponse } from '../../../@models/db/response.model';

@Injectable({
  providedIn: 'root'
})
export class PositivesService implements DBService {


  private cictDB = Databases.cict;
  private cictHeaders: string[][];

  constructor(private dbService: PouchDBService) {
    this.instance();
    this.remoteSync();
  }

  instance(): PouchDB.Database<{}> {
    return this.dbService.instance(this.cictDB);
  }

  get headers(): string[][] { return this.cictHeaders; }
  set headers(headers: string[][]) { this.cictHeaders = headers; }

  async getAll(startkey = 'new:case:positive:', endkey = 'province:\ufff0' ): Promise<AllDocs.Root | undefined> {
    const requestQuery = {
      include_docs: true,
      startkey,
      endkey,
      limit: 800,
    };

    const locAllDocs = await this.instance()?.allDocs(requestQuery) as AllDocs.Root;

    if (locAllDocs.rows.length !== 0) return locAllDocs;

    return await this.dbService?.getRemoteDBInstance(this.cictDB)?.allDocs(requestQuery) as AllDocs.Root;
  }


  async addAll(docs: Doc[]): Promise<BulkAddResponse | undefined> {
    return this.dbService.addAll(this.cictDB, docs);
  }

  async getTableHeaders(current: 'new:case:positive' | 'new:case' = 'new:case:positive'): Promise<string[][]> {
    if (this.headers) return Promise.resolve(this.headers);
    try {
      const response = await this.get(current) as PSchema; // TODO add headers to couchdb-bootstrap repo
      return (this.headers = response.fields);
    } catch (error) {
      throw Error(`${current} table headers could not be fetched.`);
    }
  }

  remoteSync?(): EventEmitter<any> {
    return this.dbService.remoteSync(this.cictDB);
  }

  getChangeListener?(): EventEmitter<any> {
    return this.dbService.getChangeListener(this.cictDB);
  }

  get(id: string): Promise<any> {
    return this.dbService?.get(this.cictDB, id);
  }

  create(doc: ExistingDoc): Promise<any> {
    return this.dbService.create(this.cictDB, doc);
  }

  update(doc: ExistingDoc): Promise<any> {
    return this.dbService.update(this.cictDB, doc);
  }

  delete(doc: ExistingDoc): Promise<any> {
    return this.dbService.delete(this.cictDB, doc);
  }
}
