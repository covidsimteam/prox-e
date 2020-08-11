"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const map_utils_service_1 = require("./map-utils.service");
describe('MapUtilsService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(map_utils_service_1.MapUtilsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
