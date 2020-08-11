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
exports.RolesService = void 0;
const pouchdb_service_1 = require("./../db/pouchdb.service");
const core_1 = require("@angular/core");
const domain_model_1 = require("../../models/domain.model");
let RolesService = class RolesService {
    constructor(pouchDbService) {
        this.pouchDbService = pouchDbService;
        this.roleArr = [
            'user',
            'municipality_admin',
            'municipality_officer',
            'cict_investigator',
            'cict_contact_tracer',
            'lab_admin',
            'lab_sample_collector',
            'lab_reporter',
            'field_sample_collector',
            'municipality_officer',
            'municipality_officer',
            'municipality_admin',
            'municipality_officer',
            'cict_investigator',
            'cict_contact_tracer',
            'lab_admin',
            'lab_admin',
            'lab_admin',
            'lab_sample_collector',
            'lab_sample_collector',
            'lab_sample_collector',
            'lab_reporter',
            'lab_reporter',
            'field_sample_collector'
        ];
    }
    /**
     * Check for the existence of the needed roles and add if necessary
     */
    checkedAddRoles() {
        this.pouchDbService.getAll(domain_model_1.Database.matrix);
    }
    get roles() { return this.roleArr; }
};
RolesService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [pouchdb_service_1.PouchDBService])
], RolesService);
exports.RolesService = RolesService;
