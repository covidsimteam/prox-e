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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PcrService = void 0;
const core_1 = require("@angular/core");
const domain_model_1 = require("../../models/domain.model");
const pouchdb_service_1 = require("./pouchdb.service");
let PcrService = class PcrService {
    constructor(dbService) {
        this.dbService = dbService;
        this.pcrDB = domain_model_1.Database.pcr_tests;
        this.instance();
        this.remoteSync();
    }
    instance() {
        return this.dbService.instance(this.pcrDB);
    }
    get headers() { return this.pcrHeaders_; }
    getAll(startkey = 'province:', endkey = 'province:\ufff0') {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                include_docs: true,
                startkey,
                endkey,
                limit: 80,
            };
            const locAllDocs = yield ((_a = this.instance()) === null || _a === void 0 ? void 0 : _a.allDocs(requestQuery));
            if (locAllDocs.rows.length !== 0)
                return locAllDocs;
            return yield ((_c = (_b = this.dbService) === null || _b === void 0 ? void 0 : _b.getRemoteDBInstance(this.pcrDB)) === null || _c === void 0 ? void 0 : _c.allDocs(requestQuery));
        });
    }
    addAll(docs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbService.addAll(this.pcrDB, docs);
        });
    }
    getAllDistricts() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.getAll();
                return (_a = response === null || response === void 0 ? void 0 : response.rows) === null || _a === void 0 ? void 0 : _a.map(row => { var _a, _b; return [...(_a = row === null || row === void 0 ? void 0 : row.doc) === null || _a === void 0 ? void 0 : _a.fields, (_b = row === null || row === void 0 ? void 0 : row.doc) === null || _b === void 0 ? void 0 : _b._rev]; });
            }
            catch (error) {
                throw Error('District-wise PCR test data could not be fetched');
            }
        });
    }
    getTableHeaders(current = 'pschema:pcrs:v8') {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO put data from pschema:pcrs:v8.ts if not found on the remote db
            if (this.pcrHeaders_)
                return Promise.resolve(this.pcrHeaders_);
            try {
                const response = yield this.get(current);
                return (this.pcrHeaders_ = response.fields);
            }
            catch (error) {
                throw Error('PCR tests table headers could not be fetched');
            }
        });
    }
    remoteSync() {
        var _a;
        return (_a = this.dbService) === null || _a === void 0 ? void 0 : _a.remoteSync(this.pcrDB);
    }
    getChangeListener() {
        var _a;
        return (_a = this.dbService) === null || _a === void 0 ? void 0 : _a.getChangeListener(this.pcrDB);
    }
    get(id) {
        var _a;
        return (_a = this.dbService) === null || _a === void 0 ? void 0 : _a.get(this.pcrDB, id);
    }
    create(doc) {
        return this.dbService.create(this.pcrDB, doc);
    }
    update(doc) {
        return this.dbService.update(this.pcrDB, doc);
    }
    delete(doc) {
        return this.dbService.delete(this.pcrDB, doc);
    }
};
PcrService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [pouchdb_service_1.PouchDBService])
], PcrService);
exports.PcrService = PcrService;
