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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbController = exports.DbOption = exports.ProxyCouchService = exports.Databases = void 0;
const events_1 = require("events");
const pouchdb_1 = __importDefault(require("pouchdb"));
const tsoa_1 = require("tsoa");
const logger_1 = __importDefault(require("../logger"));
var Databases;
(function (Databases) {
    Databases["covidsimteam"] = "covidsimteam";
    Databases["returnees"] = "foreign_returnees";
    Databases["spatial"] = "nepal_spatial";
    Databases["pcr_tests"] = "pcr_tests";
    Databases["rdt_tests"] = "rdt_tests";
    Databases["audit"] = "usage_audit";
    Databases["matrix"] = "matrix";
    Databases["roles"] = "roles";
    Databases["history"] = "history";
    Databases["default"] = "default";
    Databases["sessions"] = "sessions";
    Databases["districts"] = "districts";
    Databases["exchange"] = "exchange";
})(Databases = exports.Databases || (exports.Databases = {}));
class ProxyCouchService {
    constructor() {
        this.fslogger = logger_1.default.child({ file: 'ProxyCouchService' });
        this.databases = {};
        Object.values(Databases).forEach((dbName) => {
            this.databases[dbName] = { name: dbName, listener: new events_1.EventEmitter() };
        });
        if (!ProxyCouchService.proxyCouchServiceInstance) {
            ProxyCouchService.proxyCouchServiceInstance = this;
        }
        return ProxyCouchService.proxyCouchServiceInstance;
    }
    instance(dbName) {
        if (this.getDBInstance(dbName))
            return this.getDBInstance(dbName);
        return (this.databases[dbName].instance = new pouchdb_1.default(this.databases[dbName].name));
    }
    getDBInstance(dbName) {
        var _a;
        return (_a = this.databases[dbName]) === null || _a === void 0 ? void 0 : _a.instance;
    }
    getRemoteDBInstance(dbName) {
        var _a;
        return (_a = this.databases[dbName]) === null || _a === void 0 ? void 0 : _a.remoteInstance;
    }
    getChangeListener(dbName) {
        var _a;
        return ((_a = this.databases[dbName]) === null || _a === void 0 ? void 0 : _a.listener) || undefined;
    }
    async get(dbName, id) {
        var _a, _b;
        try {
            return await ((_a = this.getDBInstance(dbName)) === null || _a === void 0 ? void 0 : _a.get(id));
        }
        catch (error) {
            return (_b = this.getRemoteDBInstance(dbName)) === null || _b === void 0 ? void 0 : _b.get(id);
        }
    }
    /**
     * Unlike other create/update actions, bulk updates are tried first on the remote if available
     * for fail fast response directly from the SSOT.
     * TODO reverse this behavior for cases with very large payloads
    */
    async addAll(dbName, docs) {
        const remoteDB = this.getRemoteDBInstance(dbName);
        const localDB = this.instance(dbName);
        if (!remoteDB)
            return localDB === null || localDB === void 0 ? void 0 : localDB.bulkDocs(docs);
        try {
            await (remoteDB === null || remoteDB === void 0 ? void 0 : remoteDB.info()); // throws error with status: 404 if not available
        }
        catch (error) {
            return localDB === null || localDB === void 0 ? void 0 : localDB.bulkDocs(docs);
        }
        return remoteDB === null || remoteDB === void 0 ? void 0 : remoteDB.bulkDocs(docs);
    }
    async getAll(dbName) {
        const remoteDB = this.getRemoteDBInstance(dbName);
        const localDB = this.instance(dbName);
        if (localDB)
            return localDB.allDocs();
        return remoteDB === null || remoteDB === void 0 ? void 0 : remoteDB.allDocs();
    }
    /**
     * Use only when the id of the doc is not relevant for its access patterns/queries
    */
    async createUsingPost(dbName, doc) {
        const dbInstance = this.getDBInstance(dbName);
        try {
            return await (dbInstance === null || dbInstance === void 0 ? void 0 : dbInstance.post(doc));
        }
        catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }
    /**
     * Use this in most cases for creating a doc and make sure to assign a unique _id field yourself.
    */
    async create(dbName, doc) {
        const dbInstance = this.getDBInstance(dbName);
        try {
            return await (dbInstance === null || dbInstance === void 0 ? void 0 : dbInstance.put(doc));
        }
        catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }
    /**
     * Use when updating a doc whose current revision string is not known yet or is likely to have changed.
    */
    async update(dbName, doc) {
        const dbInstance = this.getDBInstance(dbName);
        try {
            const result = await this.get(dbName, doc._id);
            doc._rev = result._rev;
            return dbInstance === null || dbInstance === void 0 ? void 0 : dbInstance.put(doc);
        }
        catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }
    async delete(dbName, doc) {
        try {
            const result = await this.get(dbName, doc._id);
            doc._rev = result._rev;
            doc._deleted = true;
            return this.update(dbName, doc);
        }
        catch (error) {
            return new Promise((_, reject) => reject(error));
        }
    }
    async getUser() { }
}
exports.ProxyCouchService = ProxyCouchService;
var DbOption;
(function (DbOption) {
    DbOption[DbOption["createDoc"] = 0] = "createDoc";
    DbOption[DbOption["updateDoc"] = 1] = "updateDoc";
})(DbOption = exports.DbOption || (exports.DbOption = {}));
let DbController = class DbController extends tsoa_1.Controller {
    constructor() {
        super();
        this.db = new ProxyCouchService();
    }
    async createDoc(payload) {
        return this.action(DbOption.createDoc, payload);
    }
    async updateDoc(payload) {
        return this.action(DbOption.updateDoc, payload);
    }
    action(option, payload) {
        const createDocFromPayload = (pay) => this.db.create(Databases.sessions, pay);
        const updateDocWithPayload = (pay) => this.db.update(Databases.sessions, pay);
        switch (+option) {
            case DbOption.createDoc:
                return createDocFromPayload(payload);
            case DbOption.updateDoc:
            default:
                return updateDocWithPayload(payload);
        }
    }
};
__decorate([
    tsoa_1.Tags('db'),
    tsoa_1.Post('create'),
    tsoa_1.Response(401, "Document add failed"),
    tsoa_1.Response(201, "Document add succeeded"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DbController.prototype, "createDoc", null);
__decorate([
    tsoa_1.Tags('db'),
    tsoa_1.Post('upload'),
    tsoa_1.Response(401, "Document update failed"),
    tsoa_1.Response(201, "Document update succeeded"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DbController.prototype, "updateDoc", null);
DbController = __decorate([
    tsoa_1.Route('db'),
    __metadata("design:paramtypes", [])
], DbController);
exports.DbController = DbController;
