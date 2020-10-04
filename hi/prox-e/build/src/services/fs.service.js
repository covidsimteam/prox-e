"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyFsService = void 0;
const logger_1 = __importDefault(require("../logger"));
const storage_blob_1 = require("@azure/storage-blob");
const storage_file_share_1 = require("@azure/storage-file-share");
const abort_controller_1 = require("@azure/abort-controller");
const logger_2 = require("@azure/logger");
const fs_1 = __importDefault(require("fs"));
const rangeSize = 4 * 1024 * 1024; // 4MB range size
const timeOut = 30 * 60 * 1000; // 30 mins
const parallelism = 20;
class ProxyFsService {
    constructor() {
        this.fslogger = logger_1.default.child({ file: 'FsService' });
        this.STORAGE_CONNECTION_STRING = process.env.STORAGE_CONNECTION_STRING || '';
        this.serviceClient = storage_file_share_1.ShareServiceClient.fromConnectionString(this.STORAGE_CONNECTION_STRING);
        this.containerName = `newcontainer${new Date().getTime()}`;
        this.blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(this.STORAGE_CONNECTION_STRING);
        this.containerClient = this.blobServiceClient.getContainerClient(this.containerName);
        this.shareName = `newshare${new Date().getTime()}`;
        this.fileShareClient = this.serviceClient.getShareClient(this.shareName);
        this.directoryClient = (dir) => this.fileShareClient.getDirectoryClient(dir);
        this.fileClient = (file) => this.directoryClient.getFileClient(file);
        logger_2.setLogLevel("info");
        if (!ProxyFsService.proxyFsServiceInstance) {
            ProxyFsService.proxyFsServiceInstance = this;
        }
        return ProxyFsService.proxyFsServiceInstance;
    }
    createDirectory(name) {
        const directoryName = name || `new_dir_${new Date().getTime()}`;
        return this.directoryClient(directoryName).create();
    }
    uploadLocalToDir(filePath, localFilePath) {
        const fileName = filePath + new Date().getTime();
        return this.fileClient.uploadFile(localFilePath, {
            rangeSize,
            parallelism,
            onProgress: (ev) => this.fslogger.trace(fileName, ev)
        });
    }
    uploadParralel(localFilePath) {
        return this.fileClient.uploadFile(localFilePath, {
            rangeSize,
            parallelism,
            onProgress: (ev) => this.fslogger.trace(ev)
        });
    }
    uploadParralelReadableStream(localFilePath, fileSize) {
        return this.fileClient
            .uploadStream(fs_1.default.createReadStream(localFilePath), fileSize, rangeSize, parallelism, {
            abortSignal: abort_controller_1.AbortController.timeout(timeOut),
            onProgress: (ev) => this.fslogger.trace(ev)
        });
    }
    downloadParralel(fileSize) {
        const buffer = Buffer.alloc(fileSize);
        return this.fileClient.downloadToBuffer(buffer, 0, undefined, {
            abortSignal: abort_controller_1.AbortController.timeout(timeOut),
            rangeSize,
            parallelism,
            onProgress: (ev) => this.fslogger.trace(ev)
        });
    }
}
exports.ProxyFsService = ProxyFsService;
