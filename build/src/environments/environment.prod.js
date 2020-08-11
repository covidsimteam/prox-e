"use strict";
/**
 * @license
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConf = exports.AppConf = exports.environment = void 0;
// Create apiConf.ts based on apiConfExample.ts if you reached here after a build error, likely in a freshly cloned repo
const apiConf_1 = require("./apiConf");
exports.environment = {
    production: true,
};
class AppConf {
    constructor() {
        this.uri = { docDBUri: apiConf_1.appUris.prodDocDB };
        // proxyUri: appUris.devProxy
        this.db = { docDBUser: apiConf_1.appUris.docDBUser, docDBPassword: apiConf_1.appUris.docDBPassword };
    }
}
exports.AppConf = AppConf;
exports.appConf = new AppConf();
