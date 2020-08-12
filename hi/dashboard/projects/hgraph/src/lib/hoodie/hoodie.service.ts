import { Injectable } from '@angular/core';
import * as Hoodie from '@hoodie/client';
import PouchDb from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class HoodieService {

  private readonly hoodie: any = new Hoodie({
    url: 'http://localhost:8080/',
    PouchDB: new PouchDb('hoodie')
  });

  constructor() { }

  // TODO add proper types to hoodie library and submit the @types/hoodie-client to hoodie project
  get hood(): any {
    return this.hoodie;
  }

  get account(): any {
    return this.hoodie.account;
  }

  get store(): any {
    return this.hoodie.store;
  }

  get logger(): any {
    return this.hoodie.log;
  }

  get connection(): any {
    return this.hoodie.connectionStatus;
  }

}
