import { appUris } from './apiConf';
import { UriConf, DBConf } from './env.types';

export const environment = {
  production: false,
};

export class AppConf {

  public uri: UriConf;
  public db: DBConf; // TODO add restricted authorization for role public before using this on prod

  constructor() {
    this.uri = {
      docDBUri: `${appUris.devDocDB}`,
      authUri: `${appUris.devDocDB}_session`,
    };
    this.db = { docDBUser: appUris.docDBUser, docDBPassword: appUris.docDBPassword };
  }
}

export const appConf = new AppConf();
