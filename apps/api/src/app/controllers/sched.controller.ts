import { Body, Controller, Post, Response, Route, Tags } from 'tsoa';
import { ProxyTableService } from '../services/table.service';

export interface Entity {
    _id: string;
    _rev: string;
    type: string;
    content: string;
    keys: string[];
    values: string[];
}

export class ProxyScheduleService {
    private static proxyScheduleServiceInstance: ProxyScheduleService;
    private proxyTableService: ProxyTableService;

    constructor() {
        if (!ProxyScheduleService.proxyScheduleServiceInstance) {
            ProxyScheduleService.proxyScheduleServiceInstance = this;
        }
        this.proxyTableService = new ProxyTableService();
        return ProxyScheduleService.proxyScheduleServiceInstance;
    }

    createScheduleIfNotExists(table: string = '', callback: (error: any) => any): any {
        return this.proxyTableService.createTableIfNotExists(table, callback);
    }

    insertToSchedule(entity: Entity, table: string, callback: (error: any) => any): any {
        return this.proxyTableService.insertToTable(entity, table, callback);
    }

    getFromSchedule(entity: Entity, table: string, callback: (error: any) => any): any {
        return this.proxyTableService.getFromTable(entity, table, callback);
    }
}

export enum SchedOption {
    createSched = 0,
    addToSched = 1,
    getFromSched = 2,
    removeFromSched = -1
}

export interface SEntity {
    _id: string;
    _rev: string;
    type: string;
    content: string;
    keys: string[];
    values: string[];
}
export interface CreateSSuccess {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateSFailure extends Error {
    name: 'session' | 'confict' | 'connection' | string;
    message: string;
    stack?: string;
}

export interface CreateSResponse extends CreateSFailure, CreateSSuccess {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    message: string;
    stack?: string;
}

export type FileSResponse = CreateSResponse | UploadSResponse;


export interface UploadSSuccess extends CreateSSuccess {
    profile: {
        fullname: string
    };
}

export interface UploadSFailure extends CreateSFailure {
    name: 'session' | 'confict' | 'connection';
    type: 'unconfirmed' | 'unauthorized' | 'unknown';
    message: string;
    stack?: string;
}

export interface UploadSResponse {
    profile?: {
        fullname: string
    };
    name?: 'session' | 'confict' | 'connection' | string;
    type?: 'unconfirmed' | 'unauthorized' | 'unknown' | string;
    message?: string;
    stack?: string;
}


@Route('schedule')
export class SchedController extends Controller {

    private sched: ProxyScheduleService;

    constructor() {
        super();
        this.sched = new ProxyScheduleService();
    }

    @Tags('schedule')
    @Post('create')
    @Response<CreateSFailure>(401, "Schedule creation failed")
    @Response<CreateSSuccess>(201, "Schedule creation succeeded")
    public async createDir(@Body() payload: { entity: SEntity, table: string }): Promise<CreateSResponse> {
        return this.action(SchedOption.createSched, payload) as Promise<CreateSResponse>;
    }

    @Tags('schedule')
    @Post('add')
    @Response<UploadSFailure>(401, "Schedule add failed")
    @Response<UploadSSuccess>(201, "Schedule add succeeded")
    public async upload(@Body() payload: { entity: SEntity, table: string }): Promise<UploadSResponse> {
        return this.action(SchedOption.addToSched, payload) as Promise<UploadSResponse>;
    }

    @Tags('schedule')
    @Post('receive')
    @Response<CreateSFailure>(401, "Schedule add failed")
    @Response<CreateSSuccess>(201, "Schedule add succeeded")
    public async receive(@Body() payload: { entity: SEntity, table: string }): Promise<CreateSResponse> {
        return this.action(SchedOption.getFromSched, payload) as Promise<CreateSResponse>;
    }

    private action(option: SchedOption, payload: { entity: SEntity, table: string }): Promise<FileSResponse> {
        switch (+option) {
            case SchedOption.addToSched:
                return this.sched.insertToSchedule(payload.entity, payload.table, () => null);
            case SchedOption.getFromSched:
                return this.sched.getFromSchedule(payload.entity, payload.table, () => null);
            case SchedOption.createSched:
            default:
                return this.sched.createScheduleIfNotExists(payload.table, () => null);
        }
    }


    // @Tags('fs')
    // @Post('download')
    // @Response<DownloadFailure>(401, "Schedule creation failed")
    // @Response<DownloadSuccess>(201, "Schedule creation succeeded")
    // public async download(@Body() payload: [string, string]): Promise<DownloadResponse>{
    //   return this.action(FileOption.download, payload) as Promise<DownloadResponse>;
    // }


}

