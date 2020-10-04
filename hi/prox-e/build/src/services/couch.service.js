"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyCouchService = void 0;
class ProxyCouchService {
    constructor() {
        if (!ProxyCouchService.proxyCouchServiceInstance) {
            ProxyCouchService.proxyCouchServiceInstance = this;
        }
        return ProxyCouchService.proxyCouchServiceInstance;
    }
    async getUser() { }
}
exports.ProxyCouchService = ProxyCouchService;
