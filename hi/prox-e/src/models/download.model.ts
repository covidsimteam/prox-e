import { UploadFailure } from "./upload.model";

export interface DownloadSuccess {
    file: {
        id: string;
        name: string;
        createdAt: Date;
        updateAt: Date;
        profile: {
            fullname: string;
        }
    }
}

export interface DownloadFailure extends UploadFailure {
    name: 'session' | 'confict' | 'connection';
    type:  'unconfirmed' | 'unauthorized' | 'unknown';
    hook: 'before:Download';
    message: string; 
    stack?: string;
}

export type DownloadResponse = DownloadFailure | DownloadSuccess;