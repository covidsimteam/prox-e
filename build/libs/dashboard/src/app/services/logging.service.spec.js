"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const logging_service_1 = require("./logging.service");
describe('LoggingService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(logging_service_1.LoggingService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
