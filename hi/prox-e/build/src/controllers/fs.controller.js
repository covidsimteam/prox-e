"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsController = exports.FileOption = void 0;
const tsoa_1 = require("tsoa");
const fs_service_1 = require("../services/fs.service");
var FileOption;
(function (FileOption) {
    FileOption[FileOption["createDir"] = 0] = "createDir";
    FileOption[FileOption["upload"] = 1] = "upload";
    FileOption[FileOption["download"] = -1] = "download";
})(FileOption = exports.FileOption || (exports.FileOption = {}));
let FsController = class FsController extends tsoa_1.Controller {
    constructor() {
        super();
        this.fs = new fs_service_1.ProxyFsService();
    }
    async createDir(payload) {
        return this.action(FileOption.createDir, payload);
    }
    async upload(payload) {
        return this.action(FileOption.upload, payload);
    }
    action(option, payload) {
        switch (+option) {
            case FileOption.upload:
                return this.fs.uploadLocalToDir(payload[0], payload[1]);
            case FileOption.createDir:
            default:
                return this.fs.createDirectory(payload[0]);
        }
    }
};
__decorate([
    tsoa_1.Tags('fs'),
    tsoa_1.Post('create'),
    tsoa_1.Response(401, "Folder creation failed"),
    tsoa_1.Response(201, "Folder creation succeeded"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FsController.prototype, "createDir", null);
__decorate([
    tsoa_1.Tags('fs'),
    tsoa_1.Post('upload'),
    tsoa_1.Response(401, "File upload failed"),
    tsoa_1.Response(201, "Folder creation succeeded"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FsController.prototype, "upload", null);
FsController = __decorate([
    tsoa_1.Route('fs'),
    __metadata("design:paramtypes", [])
], FsController);
exports.FsController = FsController;
