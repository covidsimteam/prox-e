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
exports.ReturneeService = void 0;
const core_1 = require("@angular/core");
const domain_model_1 = require("../../models/domain.model");
const pouchdb_service_1 = require("./pouchdb.service");
let ReturneeService = class ReturneeService {
    constructor(dbService) {
        this.dbService = dbService;
        this.returneeDB = domain_model_1.Database.returnees;
        this.instance();
        this.remoteSync();
    }
    instance() {
        return this.dbService.instance(this.returneeDB);
    }
    get headers() { return this.returneeHeaders_; }
    async getAll(startkey = 'province:', endkey = 'province:\ufff0') {
        var _a, _b, _c, _d;
        const requestQuery = {
            include_docs: true,
            startkey,
            endkey,
            limit: 800,
        };
        const locAllDocs = await ((_a = this.instance()) === null || _a === void 0 ? void 0 : _a.allDocs(requestQuery));
        if (((_b = locAllDocs === null || locAllDocs === void 0 ? void 0 : locAllDocs.rows) === null || _b === void 0 ? void 0 : _b.length) !== 0)
            return locAllDocs;
        return await ((_d = (_c = this.dbService) === null || _c === void 0 ? void 0 : _c.getRemoteDBInstance(this.returneeDB)) === null || _d === void 0 ? void 0 : _d.allDocs(requestQuery));
    }
    async addAll(docs) {
        return this.dbService.addAll(this.returneeDB, docs);
    }
    async getAllWards() {
        var _a;
        try {
            const response = await this.getAll();
            return (_a = response === null || response === void 0 ? void 0 : response.rows) === null || _a === void 0 ? void 0 : _a.map(row => { var _a, _b; return [...(_a = row === null || row === void 0 ? void 0 : row.doc) === null || _a === void 0 ? void 0 : _a.fields, (_b = row === null || row === void 0 ? void 0 : row.doc) === null || _b === void 0 ? void 0 : _b._rev]; });
        }
        catch (error) {
            throw Error('Ward-wise Returnee data could not be fetched');
        }
    }
    async getTableHeaders(current = 'pschema:returnees:v8') {
        // TODO put data from pschema:pcrs:v8.ts if not found on the remote db
        if (this.returneeHeaders_)
            return Promise.resolve(this.returneeHeaders_);
        try {
            const response = await this.get(current);
            return (this.returneeHeaders_ = response.fields);
        }
        catch (error) {
            throw Error('Returnee data table headers could not be fetched');
        }
    }
    remoteSync() {
        var _a;
        return (_a = this.dbService) === null || _a === void 0 ? void 0 : _a.remoteSync(this.returneeDB);
    }
    getChangeListener() {
        var _a;
        return (_a = this.dbService) === null || _a === void 0 ? void 0 : _a.getChangeListener(this.returneeDB);
    }
    get(id) {
        return this.dbService.get(this.returneeDB, id);
    }
    create(doc) {
        return this.dbService.create(this.returneeDB, doc);
    }
    update(doc) {
        return this.dbService.update(this.returneeDB, doc);
    }
    delete(doc) {
        return this.dbService.delete(this.returneeDB, doc);
    }
};
ReturneeService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [pouchdb_service_1.PouchDBService])
], ReturneeService);
exports.ReturneeService = ReturneeService;
