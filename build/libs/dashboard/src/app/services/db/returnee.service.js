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
    getAll(startkey = 'province:', endkey = 'province:\ufff0') {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                include_docs: true,
                startkey,
                endkey,
                limit: 800,
            };
            const locAllDocs = yield this.instance().allDocs(requestQuery);
            if (locAllDocs.rows.length !== 0)
                return locAllDocs;
            return yield this.dbService.getRemoteDBInstance(this.returneeDB).allDocs(requestQuery);
        });
    }
    addAll(docs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbService.addAll(this.returneeDB, docs);
        });
    }
    getAllWards() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.getAll();
                return response.rows.map(row => [...row.doc.fields, row.doc._rev]);
            }
            catch (error) {
                throw Error('Ward-wise Returnee data could not be fetched');
            }
        });
    }
    getTableHeaders(current = 'pschema:returnees:v8') {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO put data from pschema:pcrs:v8.ts if not found on the remote db
            if (this.returneeHeaders_)
                return Promise.resolve(this.returneeHeaders_);
            try {
                const response = yield this.get(current);
                return (this.returneeHeaders_ = response.fields);
            }
            catch (error) {
                throw Error('Returnee data table headers could not be fetched');
            }
        });
    }
    remoteSync() {
        return this.dbService.remoteSync(this.returneeDB);
    }
    getChangeListener() {
        return this.dbService.getChangeListener(this.returneeDB);
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
