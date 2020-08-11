"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const spatial_service_1 = require("./spatial.service");
const testing_2 = require("@angular/common/http/testing");
const environment_1 = require("../../../environments/environment");
describe('SpatialService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        });
        service = testing_1.TestBed.inject(spatial_service_1.SpatialService);
    });
    it('should be created', testing_1.inject([environment_1.AppConf], () => {
        expect(service).toBeTruthy();
    }));
});
