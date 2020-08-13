import { EventEmitter, Injectable } from '@angular/core';
import { Databases, ExistingDoc } from '../../models/domain.model';
import { DBService } from '../db/db.service.interface';
import { PouchDBService } from '../db/pouchdb.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService implements DBService {

  private roleDB = Databases.roles;
  private roleArr: string[] = [''];

  constructor(private dbService: PouchDBService) {
    this.instance();
    this.remoteSync();
  }

  addRole(role: string) {
    this.roleArr.push(role);
  }

  get roles(): string[] {
    return this.roleArr.slice();
  }

  set roles(roles: string[]) {
    this.roleArr = roles;
  }

  isAdmin(): boolean {
    return this.roleArr
      .some(role => role === 'lalitpur:lab_admin' || role === 'lalitpur:municipality_admin');
  }

  roleExists(role: string): boolean {
    return this.roleArr.find((rol: string) => role === rol)?.length !== 0;
  }

  removeRole(role: string) {
    this.roleArr = this.roleArr.filter(rol => rol !== role);
  }

  instance(): PouchDB.Database<{}> | undefined {
    return this.dbService.instance(this.roleDB);
  }

  remoteSync(): EventEmitter<any> | undefined {
    return this.dbService.remoteSync(this.roleDB);
  }

  getChangeListener(): EventEmitter<any> | undefined {
    return this.dbService.getChangeListener(this.roleDB);
  }

  get(id: string): Promise<any> | undefined {
    return this.dbService?.get(this.roleDB, id);
  }

  create(doc: ExistingDoc): Promise<any> {
    return this.dbService.create(this.roleDB, doc);
  }

  update(doc: ExistingDoc): Promise<any> {
    return this.dbService.update(this.roleDB, doc);
  }

  delete(doc: ExistingDoc): Promise<any> {
    return this.dbService.delete(this.roleDB, doc);
  }



}
