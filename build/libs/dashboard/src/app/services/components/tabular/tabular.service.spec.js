"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const tabular_service_1 = require("./tabular.service");
describe('TabularService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(tabular_service_1.TabularService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
