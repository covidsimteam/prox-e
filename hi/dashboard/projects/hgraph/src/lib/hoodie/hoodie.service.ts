import { Injectable } from '@angular/core';
import * as Hoodie from '@hoodie/client';
import PouchDB from 'pouchdb';
@Injectable({
  providedIn: 'root'
})
export class HoodieService {

  private readonly hoodie: any = new Hoodie({
    url: 'http://127.0.0.1:8080/',
    PouchDB: new PouchDB('hoodie')
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
