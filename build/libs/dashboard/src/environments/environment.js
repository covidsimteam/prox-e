"use strict";
/**
 * @license
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConf = exports.AppConf = exports.environment = void 0;
// Create apiConf.ts based on apiConfExample.ts if you reached here after a build error, likely in a freshly cloned repo
const apiConf_1 = require("./apiConf");
exports.environment = {
    production: false,
};
class AppConf {
    constructor() {
        this.uri = { docDBUri: apiConf_1.appUris.devDocDB };
        // proxyUri: appUris.devProxy
        this.db = { docDBUser: apiConf_1.appUris.docDBUser, docDBPassword: apiConf_1.appUris.docDBPassword };
    }
}
exports.AppConf = AppConf;
exports.appConf = new AppConf();
