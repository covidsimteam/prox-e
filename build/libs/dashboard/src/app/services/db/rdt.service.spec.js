"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rdt_service_1 = require("./rdt.service");
const testing_2 = require("@angular/common/http/testing");
const environment_1 = require("../../../environments/environment");
describe('RdtService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        });
        service = testing_1.TestBed.inject(rdt_service_1.RdtService);
    });
    it('should be created', testing_1.inject([environment_1.AppConf], () => {
        expect(service).toBeTruthy();
    }));
});
