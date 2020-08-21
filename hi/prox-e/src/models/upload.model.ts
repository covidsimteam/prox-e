import { CreateDirSuccess, CreateDirFailure } from "./create.model";

export interface UploadSuccess extends CreateDirSuccess {
    profile: {
        fullname: string
    };
}

export interface UploadFailure extends CreateDirFailure {
    name: 'session' | 'confict' | 'connection';
    type:  'unconfirmed' | 'unauthorized' | 'unknown';
    message: string; 
    stack?: string;
}

export type UploadResponse = UploadFailure | UploadSuccess;