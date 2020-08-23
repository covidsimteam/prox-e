import { SchedOption } from 'src/models/actions.model';
import { CreateDirSuccess as CreateSuccess, CreateFailure, CreateResponse } from 'src/models/create.model';
import { Entity } from 'src/models/entity.model';
import { FileResponse } from 'src/models/reactions.model';
import { UploadFailure, UploadResponse, UploadSuccess } from 'src/models/upload.model';
import { ProxyScheduleService } from 'src/services/sched.service';
import { Body, Controller, Post, Response, Route, Tags } from 'tsoa';

@Route('schedule')
export class SchedController extends Controller {

    private sched: ProxyScheduleService;

    constructor() {
        super();
        this.sched = new ProxyScheduleService();
    }

    @Tags('schedule')
    @Post('create')
    @Response<CreateFailure>(401, "Schedule creation failed")
    @Response<CreateSuccess>(201, "Schedule creation succeeded")
    public async createDir(@Body() payload: { entity: Entity, table: string }): Promise<CreateResponse> {
        return this.action(SchedOption.createSched, payload) as Promise<CreateResponse>;
    }

    @Tags('schedule')
    @Post('upload')
    @Response<UploadFailure>(401, "Schedule add failed")
    @Response<UploadSuccess>(201, "Schedule add succeeded")
    public async upload(@Body() payload: { entity: Entity, table: string }): Promise<UploadResponse> {
        return this.action(SchedOption.addToSched, payload) as Promise<UploadResponse>;
    }

    private action(option: SchedOption, payload: { entity: Entity, table: string }): Promise<FileResponse> {
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

