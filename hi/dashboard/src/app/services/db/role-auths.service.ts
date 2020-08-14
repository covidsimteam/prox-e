import { Injectable, EventEmitter } from '@angular/core';
import { DBService } from './db.service.interface';
import { Databases, ExistingDoc } from 'app/models/domain.model';
import { PouchDBService } from './pouchdb.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthsService implements DBService {

  private roleAuthDB = Databases.roles;

  private readonly roleArr: string[] = [''];

  constructor(private dbService: PouchDBService) {
    this.instance();
    this.remoteSync();
  }

  addRole(v: string) {
    this.roleArr.push(v);
  }

  addRoles(roles: string[]) {
    roles.forEach((role: string) => this.addRole(role));
  }

  getDashboardAuths() {}

  getRoles(): string[] {
    return this.roleArr.slice();
  }

  instance(): PouchDB.Database<{}> {
    return this.dbService.instance(this.roleAuthDB);
  }

  remoteSync?(): EventEmitter<any> {
    return this.dbService.remoteSync(this.roleAuthDB);
  }

  getChangeListener?(): EventEmitter<any> {
    return this.dbService.getChangeListener(this.roleAuthDB);
  }

  get(id: string): Promise<any> {
    return this.dbService.get(this.roleAuthDB, id);
  }

  create?(doc: ExistingDoc): Promise<any> {
    return this.dbService.create(this.roleAuthDB, doc);
  }

  update?(doc: ExistingDoc): Promise<any> {
    return this.dbService.update(this.roleAuthDB, doc);
  }

  delete?(doc: ExistingDoc): Promise<any> {
    return this.dbService.delete(this.roleAuthDB, doc);
  }
}
