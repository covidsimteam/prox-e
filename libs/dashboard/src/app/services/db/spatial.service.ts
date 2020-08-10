import { EventEmitter, Injectable } from '@angular/core';
import { DBService } from './db.service.interface';
import { Database } from '../../models/domain.model';
import { PouchDBService } from './pouchdb.service';


@Injectable({
  providedIn: 'root',
})
export class SpatialService implements DBService {

  spatialDB = Database.spatial;

  constructor(private dbService: PouchDBService) {
    this.instance();
    this.remoteLogin();
  }

  instance() {
    return this.dbService.instance(this.spatialDB);
  }

  remoteSync(): EventEmitter<any> {
    return this.dbService.remoteSync(this.spatialDB);
  }

  remoteLogin(): PouchDB.Database {
    return this.dbService.remoteLogin(this.spatialDB);
  }

  getChangeListener(): EventEmitter<any> {
    return this.dbService.getChangeListener(this.spatialDB);
  }

  get(id: string): Promise<any> {
    return this.dbService.get(this.spatialDB, id);
  }

}
