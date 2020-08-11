"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const rdt_table_service_1 = require("./rdt-table.service");
describe('RdtTableService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(rdt_table_service_1.RdtTableService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
