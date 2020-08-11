"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReturneeService = exports.CurrentUser = exports.Database = void 0;
var Database;
(function (Database) {
    Database["covidsimteam"] = "covidsimteam";
    Database["returnees"] = "foreign_returnees";
    Database["spatial"] = "nepal_spatial";
    Database["pcr_tests"] = "pcr_tests";
    Database["rdt_tests"] = "rdt_tests";
    Database["audit"] = "usage_audit";
    Database["matrix"] = "matrix";
})(Database = exports.Database || (exports.Database = {}));
var CurrentUser;
(function (CurrentUser) {
    CurrentUser["isLoggedIn"] = "isLoggedIn";
    CurrentUser["name"] = "username";
    CurrentUser["pass"] = "password";
    CurrentUser["role"] = "role";
})(CurrentUser = exports.CurrentUser || (exports.CurrentUser = {}));
function isReturneeService(service) {
    return 'getAllWards' in service;
}
exports.isReturneeService = isReturneeService;
