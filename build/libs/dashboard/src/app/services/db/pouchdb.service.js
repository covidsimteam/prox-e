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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PouchDBService = void 0;
const core_1 = require("@angular/core");
const pouchdb_1 = __importDefault(require("pouchdb"));
const pouchdb_authentication_1 = __importDefault(require("pouchdb-authentication"));
const domain_model_1 = require("../../models/domain.model");
const auth_service_1 = require("../auth/auth.service");
const environment_service_1 = require("../env/environment.service");
const logging_service_1 = require("../logging.service");
const rxjs_1 = require("rxjs");
pouchdb_1.default.plugin(pouchdb_authentication_1.default);
let PouchDBService = class PouchDBService {
    constructor(environment, logger, authService) {
        this.environment = environment;
        this.logger = logger;
        this.authService = authService;
        this.databases = {};
        Object.values(domain_model_1.Database).forEach((dbName) => {
            this.databases[dbName] = { name: dbName, listener: new core_1.EventEmitter() };
        });
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
        return (_a = this.databases[dbName]) === null || _a === void 0 ? void 0 : _a.listener;
    }
    get(dbName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getDBInstance(dbName).get(id);
            }
            catch (error) {
                return this.getRemoteDBInstance(dbName).get(id);
            }
        });
    }
    /**
     * Unlike other create/update actions, bulk updates are tried first on the remote if available
     * for fail fast response directly from the SSOT.
     * TODO reverse this behavior for cases with very large payloads
    */
    addAll(dbName, docs) {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteDB = this.getRemoteDBInstance(dbName);
            const localDB = this.instance(dbName);
            if (!remoteDB)
                return localDB.bulkDocs(docs);
            try {
                yield remoteDB.info(); // throws error with status: 404 if not available
            }
            catch (error) {
                return localDB.bulkDocs(docs);
            }
            return remoteDB.bulkDocs(docs);
        });
    }
    getAll(dbName) {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteDB = this.getRemoteDBInstance(dbName);
            const localDB = this.instance(dbName);
            if (localDB)
                return localDB.allDocs();
            return remoteDB.allDocs();
        });
    }
    /**
     * Use only when the id of the doc is not relevant for its access patterns/queries
    */
    createUsingPost(dbName, doc) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbInstance = this.getDBInstance(dbName);
            try {
                return yield dbInstance.post(doc);
            }
            catch (error) {
                return new Promise((_, reject) => reject(error));
            }
        });
    }
    /**
     * Use this in most cases for creating a doc and make sure to assign a unique _id field yourself.
    */
    create(dbName, doc) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbInstance = this.getDBInstance(dbName);
            try {
                return yield dbInstance.put(doc);
            }
            catch (error) {
                return new Promise((_, reject) => reject(error));
            }
        });
    }
    /**
     * Use when updating a doc whose current revision string is not known yet or is likely to have changed.
    */
    update(dbName, doc) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbInstance = this.getDBInstance(dbName);
            try {
                const result = yield this.get(dbName, doc._id);
                doc._rev = result._rev;
                return dbInstance.put(doc);
            }
            catch (error) {
                return new Promise((_, reject) => reject(error));
            }
        });
    }
    delete(dbName, doc) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.get(dbName, doc._id);
                doc._rev = result._rev;
                doc._deleted = true;
                return this.update(dbName, doc);
            }
            catch (error) {
                return new Promise((_, reject) => reject(error));
            }
        });
    }
    remoteLogin(dbName) {
        var _a;
        if (this.getRemoteDBInstance(dbName))
            return this.getRemoteDBInstance(dbName);
        const remoteDB = new pouchdb_1.default(`${this.environment.dbUri}/${dbName}`, {
            skip_setup: true,
        });
        if (!((_a = this === null || this === void 0 ? void 0 : this.authService) === null || _a === void 0 ? void 0 : _a.isAuthenticated))
            return this.getRemoteDBInstance(dbName);
        rxjs_1.from(remoteDB.logIn(this.authService.user, this.authService.pass)).subscribe(_ => {
            this.databases[dbName].remoteInstance = remoteDB;
        });
        return this.getRemoteDBInstance(dbName);
    }
    remoteSync(dbName) {
        if (this.getRemoteDBInstance(dbName))
            return this.getChangeListener(dbName);
        const dbMeta = this.databases[dbName];
        const remoteDB = new pouchdb_1.default(`${this.environment.dbUri}/${dbName}`, {
            skip_setup: true,
        });
        if (!this.authService.isAuthenticated)
            return this.getChangeListener(dbName);
        const localDB = dbMeta.instance ? dbMeta.instance : this.instance(dbName);
        const emitOnChange = (change) => { var _a; return (_a = dbMeta === null || dbMeta === void 0 ? void 0 : dbMeta.listener) === null || _a === void 0 ? void 0 : _a.emit(change); };
        rxjs_1.from(remoteDB.logIn(this.authService.user, this.authService.pass))
            .subscribe(_ => {
            this.databases[dbName].remoteInstance = remoteDB;
            localDB.sync(remoteDB, { live: true })
                .on('change', emitOnChange)
                .on('complete', emitOnChange)
                .on('error', (err) => this.logger.error(err));
            this.databases[dbName].listener = dbMeta.listener;
        });
        return dbMeta.listener;
    }
};
PouchDBService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        logging_service_1.LoggingService,
        auth_service_1.AuthService])
], PouchDBService);
exports.PouchDBService = PouchDBService;
