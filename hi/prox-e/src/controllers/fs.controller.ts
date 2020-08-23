import { Body, Controller, Post, Response, Route, Tags } from 'tsoa';
import { ProxyFsService } from '../services/fs.service';

export enum FileOption {
  createDir = 0,
  upload = 1,
  download = -1
}

export interface CreateFSuccess {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateFFailure extends Error {
  name: 'session' | 'confict' | 'connection' | string;
  message: string;
  stack?: string;
}

export interface CreateFResponse extends CreateFFailure, CreateFSuccess {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  message: string;
  stack?: string;
}


export interface UploadFSuccess extends CreateFSuccess {
  profile: {
    fullname: string
  };
}

export interface UploadFFailure extends CreateFFailure {
  name: 'session' | 'confict' | 'connection';
  type: 'unconfirmed' | 'unauthorized' | 'unknown';
  message: string;
  stack?: string;
}

export interface UploadFResponse {
  profile?: {
    fullname: string
  };
  name?: 'session' | 'confict' | 'connection' | string;
  type?: 'unconfirmed' | 'unauthorized' | 'unknown' | string;
  message?: string;
  stack?: string;
}

export type FileFResponse = CreateFResponse | UploadFResponse;

@Route('fs')
export class FsController extends Controller {

  private fs: ProxyFsService;

  constructor() {
    super();
    this.fs = new ProxyFsService();
  }

  @Tags('fs')
  @Post('create')
  @Response<CreateFFailure>(401, "Folder creation failed")
  @Response<CreateFSuccess>(201, "Folder creation succeeded")
  public async createDir(@Body() payload: any): Promise<CreateFResponse> {
    return this.action(FileOption.createDir, payload) as Promise<CreateFResponse>;
  }

  @Tags('fs')
  @Post('upload')
  @Response<UploadFFailure>(401, "File upload failed")
  @Response<UploadFSuccess>(201, "Folder creation succeeded")
  public async upload(@Body() payload: any): Promise<UploadFResponse> {
    return this.action(FileOption.upload, payload) as Promise<UploadFResponse>;
  }

  private action(option: FileOption, payload: any): Promise<FileFResponse> {
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

