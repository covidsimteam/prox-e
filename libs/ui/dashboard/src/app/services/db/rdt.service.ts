import { EventEmitter, Injectable } from '@angular/core';
import { Database, ExistingDoc, Doc } from '../../models/domain.model';
import { DBService } from './db.service.interface';
import { PouchDBService } from './pouchdb.service';
import { AllDocs } from '../../models/db/all-docs.model';
import { BulkAddResponse } from '../../models/db/response.model';
import { RDTTupleRev } from '../../models/db/table-headers.model';
import { PSchema } from '../../models/db/schema/pschema.model';


@Injectable({
  providedIn: 'root',
})
export class RdtService implements DBService {

  private rdtDB = Database.rdt_tests;
  private rdtHeaders_: string[][];

  constructor(private dbService: PouchDBService) {
    this.instance();
    this.remoteSync();
  }

  instance() {
    return this.dbService.instance(this.rdtDB);
  }

  get headers(): string[][] { return this.rdtHeaders_; }

  async getAll(startkey = 'province:', endkey = 'province:\ufff0' ): Promise<AllDocs.Root> {
    const requestQuery = {
      include_docs: true,
      startkey,
      endkey,
      limit: 80,
    };

    const locAllDocs = await this.instance().allDocs(requestQuery) as AllDocs.Root;

    if (locAllDocs.rows.length !== 0) return locAllDocs;

    return await this.dbService.getRemoteDBInstance(this.rdtDB).allDocs(requestQuery) as AllDocs.Root;
  }

  async addAll(docs: Doc[]): Promise<BulkAddResponse> {
    return this.dbService.addAll(this.rdtDB, docs);
  }

  async getAllDistricts(): Promise<Array<RDTTupleRev>> {
    try {
      const response = await this.getAll();
      return response.rows.map(row => [...row.doc.fields, row.doc._rev] as RDTTupleRev);
    } catch (error) {
      throw Error('District-wise RDT test data could not be fetched');
    }
  }

  async getTableHeaders(current = 'pschema:rdts:v8'): Promise<string[][]> {
    if (this.rdtHeaders_) return Promise.resolve(this.rdtHeaders_);
    try {
      const response = await this.get(current) as PSchema; // TODO add headers to couchdb-bootstrap repo
      return (this.rdtHeaders_ = response.fields);
    } catch (error) {
      throw Error('RDT tests table headers could not be fetched');
    }
  }

  remoteSync(): EventEmitter<any> {
    return this.dbService.remoteSync(this.rdtDB);
  }

  getChangeListener(): EventEmitter<any> {
    return this.dbService.getChangeListener(this.rdtDB);
  }

  get(id: string): Promise<any> {
    return this.dbService.get(this.rdtDB, id);
  }

  create(doc: ExistingDoc): Promise<any> {
    return this.dbService.create(this.rdtDB, doc);
  }

  update(doc: ExistingDoc): Promise<any> {
    return this.dbService.update(this.rdtDB, doc);
  }

  delete(doc: ExistingDoc): Promise<any> {
    return this.dbService.delete(this.rdtDB, doc);
  }
}
