import { Injectable } from '@angular/core';
import { PouchDBService } from '../../services/db/pouchdb.service';
import { Databases, ExistingDoc } from '../../@models/domain.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private pouch: PouchDBService) { }

  addAll(payload: Partial<ExistingDoc>[], dbName: Databases) {
    this.pouch.addAll(dbName, payload);
  }
}
