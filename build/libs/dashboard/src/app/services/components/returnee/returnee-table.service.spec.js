"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const returnee_table_service_1 = require("./returnee-table.service");
describe('ReturneeTableService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(returnee_table_service_1.ReturneeTableService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
