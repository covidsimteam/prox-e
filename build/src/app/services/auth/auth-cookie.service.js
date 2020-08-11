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
exports.AuthCookieService = void 0;
const core_1 = require("@angular/core");
const domain_model_1 = require("../../models/domain.model");
const pouchdb_service_1 = require("../db/pouchdb.service");
let AuthCookieService = class AuthCookieService {
    constructor(dbService) {
        this.dbService = dbService;
        this.auditDB = domain_model_1.Database.audit;
        this.dbService.instance(this.auditDB);
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.currentCookieId)
                return Promise.reject();
            return this.dbService.get(this.auditDB, this.currentCookieId);
        });
    }
    create(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            delete doc._id;
            try {
                const created = yield this.dbService.createUsingPost(this.auditDB, doc);
                const { _id } = created;
                this.currentCookieId = _id;
            }
            catch (error) {
                return Promise.reject();
            }
        });
    }
};
AuthCookieService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [pouchdb_service_1.PouchDBService])
], AuthCookieService);
exports.AuthCookieService = AuthCookieService;
