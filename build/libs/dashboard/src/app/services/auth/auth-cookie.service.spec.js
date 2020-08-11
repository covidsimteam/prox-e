"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const auth_cookie_service_1 = require("./auth-cookie.service");
const environment_1 = require("../../../environments/environment");
const testing_2 = require("@angular/common/http/testing");
describe('AuthCookieService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        });
        service = testing_1.TestBed.inject(auth_cookie_service_1.AuthCookieService);
    });
    it('should be created', testing_1.inject([environment_1.AppConf], () => {
        expect(service).toBeTruthy();
    }));
});
