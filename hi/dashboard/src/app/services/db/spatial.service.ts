import { EventEmitter, Injectable } from '@angular/core';
import { DBService } from './db.service.interface';
import { Databases } from '../../@models/domain.model';
import { PouchDBService } from './pouchdb.service';


@Injectable({
  providedIn: 'root',
})
export class SpatialService implements DBService {

  spatialDB = Databases.spatial;

  constructor(private dbService: PouchDBService) {
    this.instance();
    this.remoteLogin();
  }

  instance(): PouchDB.Database<{}> | undefined {
    return this.dbService.instance(this.spatialDB);
  }

  remoteSync(): EventEmitter<any> | undefined {
    return this.dbService.remoteSync(this.spatialDB);
  }

  remoteLogin(): PouchDB.Database<{}> | undefined {
    return this.dbService.remoteLogin(this.spatialDB);
  }

  getChangeListener(): EventEmitter<any> | undefined {
    return this.dbService.getChangeListener(this.spatialDB);
  }

  get(id: string): Promise<any | undefined> {
    return this.dbService.get(this.spatialDB, id);
  }

}
