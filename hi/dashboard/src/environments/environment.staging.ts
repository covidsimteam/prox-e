/**
 * @license
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

// Create apiConf.ts based on apiConfExample.ts if you reached here after a build error, likely in a freshly cloned repo
import { appUris } from './apiConf';
import { DBConf, UriConf } from './env.types';

export const environment = {
  production: true,
};

export class AppConf {

  public uri: UriConf;
  public db: DBConf;

  constructor() {
    this.uri = { docDBUri: appUris.stagingDocDB };
    // proxyUri: appUris.devProxy
    this.db = { docDBUser: appUris.docDBUser, docDBPassword: appUris.docDBPassword };
  }
}

export const appConf = new AppConf();
