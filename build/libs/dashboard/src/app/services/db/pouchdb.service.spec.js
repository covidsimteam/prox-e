"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const pouchdb_service_1 = require("./pouchdb.service");
const environment_1 = require("../../../environments/environment");
const testing_2 = require("@angular/common/http/testing");
describe('PouchDBService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        });
        service = testing_1.TestBed.inject(pouchdb_service_1.PouchDBService);
    });
    it('should be created', testing_1.inject([environment_1.AppConf], () => {
        expect(service).toBeTruthy();
    }));
});
