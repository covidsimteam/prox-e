"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const auth_guard_1 = require("./auth.guard");
const testing_2 = require("@angular/router/testing");
const http_1 = require("@angular/common/http");
const environment_1 = require("../../../environments/environment");
describe('AuthGuard', () => {
    let guard;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule, http_1.HttpClientModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        });
        guard = testing_1.TestBed.inject(auth_guard_1.AuthGuard);
    });
    it('should be created', testing_1.inject([environment_1.AppConf], () => {
        expect(guard).toBeTruthy();
    }));
});
