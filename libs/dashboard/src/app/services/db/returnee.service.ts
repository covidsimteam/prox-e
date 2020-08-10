import { EventEmitter, Injectable } from '@angular/core';
import { Database, ExistingDoc, Doc } from '../../models/domain.model';
import { DBService } from './db.service.interface';
import { PouchDBService } from './pouchdb.service';
import { AllDocs } from '../../models/db/all-docs.model';
import { BulkAddResponse } from '../../models/db/response.model';
import { RETTupleRev } from '../../models/db/table-headers.model';
import { PSchema } from '../../models/db/schema/pschema.model';


@Injectable({
  providedIn: 'root',
})
export class ReturneeService implements DBService {

  private returneeDB = Database.returnees;

  private returneeHeaders_: string[][];

  constructor(private dbService: PouchDBService) {
    this.instance();
    this.remoteSync();
  }

  instance() {
    return this.dbService.instance(this.returneeDB);
  }

  get headers(): string[][] { return this.returneeHeaders_; }

  async getAll(startkey = 'province:', endkey = 'province:\ufff0'): Promise<AllDocs.Root> {
    const requestQuery = {
      include_docs: true,
      startkey,
      endkey,
      limit: 800,
    };
    const locAllDocs = await this.instance().allDocs(requestQuery) as AllDocs.Root;

    if (locAllDocs.rows.length !== 0) return locAllDocs;

    return await this.dbService.getRemoteDBInstance(this.returneeDB).allDocs(requestQuery) as AllDocs.Root;
  }

  async addAll(docs: Doc[]): Promise<BulkAddResponse> {
    return this.dbService.addAll(this.returneeDB, docs);
  }

  async getAllWards(): Promise<Array<RETTupleRev>> {
    try {
      const response = await this.getAll();
      return response.rows.map(row => [...row.doc.fields, row.doc._rev] as unknown as RETTupleRev);
    } catch (error) {
      throw Error('Ward-wise Returnee data could not be fetched');
    }
  }

  async getTableHeaders(current = 'pschema:returnees:v8'): Promise<string[][]> {
    // TODO put data from pschema:pcrs:v8.ts if not found on the remote db
    if (this.returneeHeaders_) return Promise.resolve(this.returneeHeaders_);
    try {
      const response = await this.get(current) as PSchema;
      return (this.returneeHeaders_ = response.fields);
    } catch (error) {
      throw Error('Returnee data table headers could not be fetched');
    }
  }


  remoteSync(): EventEmitter<any> {
    return this.dbService.remoteSync(this.returneeDB);
  }

  getChangeListener(): EventEmitter<any> {
    return this.dbService.getChangeListener(this.returneeDB);
  }

  get(id: string): Promise<any> {
    return this.dbService.get(this.returneeDB, id);
  }

  create(doc: ExistingDoc): Promise<any> {
    return this.dbService.create(this.returneeDB, doc);
  }

  update(doc: ExistingDoc): Promise<any> {
    return this.dbService.update(this.returneeDB, doc);
  }

  delete(doc: ExistingDoc): Promise<any> {
    return this.dbService.delete(this.returneeDB, doc);
  }
}
