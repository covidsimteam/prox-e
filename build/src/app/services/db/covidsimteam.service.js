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
exports.CovidSimTeamService = void 0;
const core_1 = require("@angular/core");
const domain_model_1 = require("../../models/domain.model");
const pouchdb_service_1 = require("./pouchdb.service");
let CovidSimTeamService = class CovidSimTeamService {
    constructor(dbService) {
        this.dbService = dbService;
        this.teamDB = domain_model_1.Database.covidsimteam;
        this.instance();
    }
    instance() {
        this.dbService.instance(this.teamDB);
    }
    remoteSync() {
        return this.dbService.remoteSync(this.teamDB);
    }
    getChangeListener() {
        var _a;
        return (_a = this.dbService) === null || _a === void 0 ? void 0 : _a.getChangeListener(this.teamDB);
    }
    get(id) {
        return this.dbService.get(this.teamDB, id);
    }
    create(doc) {
        return this.dbService.create(this.teamDB, doc);
    }
    update(doc) {
        return this.dbService.update(this.teamDB, doc);
    }
    delete(doc) {
        return this.dbService.delete(this.teamDB, doc);
    }
};
CovidSimTeamService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [pouchdb_service_1.PouchDBService])
], CovidSimTeamService);
exports.CovidSimTeamService = CovidSimTeamService;
