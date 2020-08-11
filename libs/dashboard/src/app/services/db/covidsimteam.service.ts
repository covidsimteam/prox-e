import { EventEmitter, Injectable } from '@angular/core';
import { DBService } from './db.service.interface';
import { Database, ExistingDoc } from '../../models/domain.model';
import { PouchDBService } from './pouchdb.service';


@Injectable({
  providedIn: 'root',
})
export class CovidSimTeamService implements DBService {

  private teamDB = Database.covidsimteam;

  constructor(private dbService: PouchDBService) {
    this.instance();
  }

  instance(): PouchDB.Database<{}> | undefined {
    return this.dbService.instance(this.teamDB);
  }

  remoteSync(): EventEmitter<any> | undefined {
    return this.dbService.remoteSync(this.teamDB) || undefined;
  }

  getChangeListener(): EventEmitter<any> | undefined {
    return this.dbService.getChangeListener(this.teamDB) || undefined;
  }

  get(id: string): Promise<any> | undefined {
    return this.dbService.get(this.teamDB, id) || undefined;
  }

  create(doc: ExistingDoc): Promise<any> | undefined {
    return this.dbService.create(this.teamDB, doc) || undefined;
  }

  update(doc: ExistingDoc): Promise<any> | undefined {
    return this.dbService.update(this.teamDB, doc) || undefined;
  }

  delete(doc: ExistingDoc): Promise<any> | undefined {
    return this.dbService.delete(this.teamDB, doc) || undefined;
  }
}
