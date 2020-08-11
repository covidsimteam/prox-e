"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const covidsimteam_service_1 = require("./covidsimteam.service");
const environment_1 = require("../../../environments/environment");
const testing_2 = require("@angular/common/http/testing");
describe('CovidSimTeamService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        });
        service = testing_1.TestBed.inject(covidsimteam_service_1.CovidSimTeamService);
    });
    it('should be created', testing_1.inject([environment_1.AppConf], () => {
        expect(service).toBeTruthy();
    }));
});
