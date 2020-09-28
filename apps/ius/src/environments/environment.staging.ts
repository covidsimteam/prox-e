import { appUris } from './apiConf';
import { DBConf, UriConf } from './env.types';

export const environment = {
  production: true,
};

export class AppConf {

  public uri: UriConf;
  public db: DBConf;

  constructor() {
    this.uri = {
      docDBUri: `${appUris.devDocDB}db`,
      authUri: `${appUris.devDocDB}_session`,
    };
    this.db = { docDBUser: appUris.docDBUser, docDBPassword: appUris.docDBPassword };
  }
}

export const appConf = new AppConf();
