"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const pcr_table_service_1 = require("./pcr-table.service");
describe('PcrTableService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(pcr_table_service_1.PcrTableService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
