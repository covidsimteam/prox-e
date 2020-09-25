import { Injectable } from '@angular/core';
import { Databases, ExistingDoc } from '../../../@models/domain.model';
import { PouchDBService } from '../../../services/db/pouchdb.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private pouch: PouchDBService) { }

  addAll(payload: Partial<ExistingDoc>[], dbName: Databases) {
    this.pouch.addAll(dbName, payload);
  }
}
