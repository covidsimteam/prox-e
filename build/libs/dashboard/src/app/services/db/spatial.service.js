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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialService = void 0;
const core_1 = require("@angular/core");
const domain_model_1 = require("../../models/domain.model");
const pouchdb_service_1 = require("./pouchdb.service");
let SpatialService = class SpatialService {
    constructor(dbService) {
        this.dbService = dbService;
        this.spatialDB = domain_model_1.Database.spatial;
        this.instance();
        this.remoteLogin();
    }
    instance() {
        return this.dbService.instance(this.spatialDB);
    }
    remoteSync() {
        return this.dbService.remoteSync(this.spatialDB);
    }
    remoteLogin() {
        return this.dbService.remoteLogin(this.spatialDB);
    }
    getChangeListener() {
        return this.dbService.getChangeListener(this.spatialDB);
    }
    get(id) {
        return this.dbService.get(this.spatialDB, id);
    }
};
SpatialService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [pouchdb_service_1.PouchDBService])
], SpatialService);
exports.SpatialService = SpatialService;
