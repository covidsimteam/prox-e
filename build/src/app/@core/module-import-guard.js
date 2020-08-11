"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwIfAlreadyLoaded = void 0;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}
exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;
