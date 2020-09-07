import { ProxyTableService } from './table.service';

export interface Entity {
    _id: string;
    _rev: string;
    type: string;
    content: string;
    keys: string[];
    values: string[];
}

export class ProxyScheduleService extends ProxyTableService {
    private static proxyScheduleServiceInstance: ProxyScheduleService;

    constructor() {
        super();
        if (!ProxyScheduleService.proxyScheduleServiceInstance) {
            ProxyScheduleService.proxyScheduleServiceInstance = this;
        }
        return ProxyScheduleService.proxyScheduleServiceInstance;
    }

    createScheduleIfNotExists(table: string = '', callback: (error: any) => any): any {
        return this.createTableIfNotExists(table, callback);
    }

    insertToSchedule(entity: Entity, table: string, callback: (error: any) => any): any {
        return this.insertToTable(entity, table, callback);
    }

    getFromSchedule(entity: Entity, table: string, callback: (error: any) => any): any {
        return this.getFromTable(entity, table, callback);
    }
}