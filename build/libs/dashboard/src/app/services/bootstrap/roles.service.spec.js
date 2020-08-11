"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const roles_service_1 = require("./roles.service");
describe('RolesService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(roles_service_1.RolesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
