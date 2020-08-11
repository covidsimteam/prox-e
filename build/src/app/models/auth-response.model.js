"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuth = void 0;
var BasicAuth;
(function (BasicAuth) {
    function isSuccess(response) {
        return 'ok' in response;
    }
    BasicAuth.isSuccess = isSuccess;
})(BasicAuth = exports.BasicAuth || (exports.BasicAuth = {}));
