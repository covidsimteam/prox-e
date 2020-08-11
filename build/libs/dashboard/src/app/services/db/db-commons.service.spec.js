"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const db_commons_service_1 = require("./db-commons.service");
describe('DBCommonsService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(db_commons_service_1.DBCommonsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
