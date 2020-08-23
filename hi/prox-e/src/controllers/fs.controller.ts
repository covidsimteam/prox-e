import { FileOption } from 'src/models/actions.model';
import { CreateDirFailure, CreateDirResponse, CreateDirSuccess } from 'src/models/create.model';
import { FileResponse } from 'src/models/reactions.model';
import { UploadFailure, UploadResponse, UploadSuccess } from 'src/models/upload.model';
import { FsService } from 'src/services/fs.service';
import { Body, Controller, Post, Response, Route, Tags } from 'tsoa';

@Route('fs')
export class FsController extends Controller {
  
  private fs: FsService;
  
  constructor() {
    super();
    this.fs = new FsService();
  }

  @Tags('fs')
  @Post('create')
  @Response<CreateDirFailure>(401, "Folder creation failed")
  @Response<CreateDirSuccess>(201, "Folder creation succeeded")
  public async createDir(@Body() payload: [string, string]): Promise<CreateDirResponse>{
    return this.action(FileOption.createDir, payload) as Promise<CreateDirResponse>;
  }

  @Tags('fs')
  @Post('upload')
  @Response<UploadFailure>(401, "File upload failed")
  @Response<UploadSuccess>(201, "Folder creation succeeded")
  public async upload(@Body() payload: [string, string]): Promise<UploadResponse>{
    return this.action(FileOption.upload, payload) as Promise<UploadResponse>;
  }

  private action(option: FileOption, payload: [string, string]): Promise<FileResponse> {
    switch (+option) {
      case FileOption.upload:
        return this.fs.uploadLocalToDir(payload[0], payload[1]);
      case FileOption.createDir:
      default:
        return this.fs.createDirectory(payload[0]);  
    }
  }
  

  // @Tags('fs')
  // @Post('download')
  // @Response<DownloadFailure>(401, "Folder creation failed")
  // @Response<DownloadSuccess>(201, "Folder creation succeeded")
  // public async download(@Body() payload: [string, string]): Promise<DownloadResponse>{
  //   return this.action(FileOption.download, payload) as Promise<DownloadResponse>;
  // }

  
}

