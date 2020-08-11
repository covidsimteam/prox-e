"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const environment_service_1 = require("./environment.service");
const environment_1 = require("../../../environments/environment");
describe('EnvironmentService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        });
        service = testing_1.TestBed.inject(environment_service_1.EnvironmentService);
    });
    it('should be created', testing_1.inject([environment_1.AppConf], () => {
        expect(service).toBeTruthy();
    }));
});
