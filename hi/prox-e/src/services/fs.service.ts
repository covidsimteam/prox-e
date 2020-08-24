import motherLogger from '../logger';
import { BlobServiceClient } from '@azure/storage-blob';
import { ShareServiceClient } from '@azure/storage-file-share';
import { AbortController } from '@azure/abort-controller';
import { setLogLevel } from '@azure/logger';

import fs from 'fs';
import { ProxyCouchService } from './couch.service';


const rangeSize = 4 * 1024 * 1024; // 4MB range size
const timeOut = 30 * 60 * 1000; // 30 mins
const parallelism = 20;

export class ProxyFsService extends ProxyCouchService {

    protected readonly fslogger = motherLogger.child({ file: 'FsService' });

    readonly STORAGE_CONNECTION_STRING = process.env.STORAGE_CONNECTION_STRING || '';
    readonly serviceClient = ShareServiceClient.fromConnectionString(this.STORAGE_CONNECTION_STRING);

    readonly containerName = `newcontainer${new Date().getTime()}`;
    readonly blobServiceClient = BlobServiceClient.fromConnectionString(this.STORAGE_CONNECTION_STRING);
    readonly containerClient = this.blobServiceClient.getContainerClient(this.containerName);

    readonly shareName = `newshare${new Date().getTime()}`;
    readonly fileShareClient = this.serviceClient.getShareClient(this.shareName);
    readonly directoryClient: any = (dir: string) => this.fileShareClient.getDirectoryClient(dir);
    readonly fileClient: any = (file: string) => this.directoryClient.getFileClient(file);

    private static proxyFsServiceInstance: ProxyFsService;

    constructor() {
        super();
        setLogLevel("info");
        if (!ProxyFsService.proxyFsServiceInstance) {
            ProxyFsService.proxyFsServiceInstance = this;
        }
        return ProxyFsService.proxyFsServiceInstance;
    }

    createDirectory(name?: string) {
        const directoryName = name || `new_dir_${new Date().getTime()}`;
        return this.directoryClient(directoryName).create();
    }

    uploadLocalToDir(filePath: string, localFilePath: string) {
        const fileName = filePath + new Date().getTime();
        return this.fileClient.uploadFile(localFilePath, {
            rangeSize,
            parallelism,
            onProgress: (ev: any) => this.fslogger.trace(fileName, ev)
        });
    }

    uploadParralel(localFilePath: string) {
        return this.fileClient.uploadFile(localFilePath, {
            rangeSize,
            parallelism,
            onProgress: (ev: any) => this.fslogger.trace(ev)
        });
    }

    uploadParralelReadableStream(localFilePath: string, fileSize: number) {
        return this.fileClient
            .uploadStream(
                fs.createReadStream(localFilePath), fileSize, rangeSize, parallelism, {
                abortSignal: AbortController.timeout(timeOut),
                onProgress: (ev: any) => this.fslogger.trace(ev)
            });
    }

    downloadParralel(fileSize: number) {
        const buffer = Buffer.alloc(fileSize);
        return this.fileClient.downloadToBuffer(buffer, 0, undefined, {
            abortSignal: AbortController.timeout(timeOut),
            rangeSize,
            parallelism,
            onProgress: (ev: any) => this.fslogger.trace(ev)
        });
    }

}

