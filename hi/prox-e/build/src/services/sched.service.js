"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyScheduleService = void 0;
const table_service_1 = require("./table.service");
class ProxyScheduleService extends table_service_1.ProxyTableService {
    constructor() {
        super();
        if (!ProxyScheduleService.proxyScheduleServiceInstance) {
            ProxyScheduleService.proxyScheduleServiceInstance = this;
        }
        return ProxyScheduleService.proxyScheduleServiceInstance;
    }
    createScheduleIfNotExists(table = '', callback) {
        return this.createTableIfNotExists(table, callback);
    }
    insertToSchedule(entity, table, callback) {
        return this.insertToTable(entity, table, callback);
    }
    getFromSchedule(entity, table, callback) {
        return this.getFromTable(entity, table, callback);
    }
}
exports.ProxyScheduleService = ProxyScheduleService;
