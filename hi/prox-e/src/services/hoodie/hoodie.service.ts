import * as Hoodie from '@hoodie/client';
import PouchDb from 'pouchdb';

export class HoodieService {

  private static instance: HoodieService;

  private readonly hoodie = new Hoodie({
    PouchDB: new PouchDb('hoodie')
  });

  constructor() {
    this.logger.info("HoodieService -> constructor -> hoodie", this.hoodie)
    if (!HoodieService.instance) {
      HoodieService.instance = this;
    }
    return HoodieService.instance;
   }

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
