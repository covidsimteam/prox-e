"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const region_component_1 = require("./region.component");
const testing_2 = require("@angular/router/testing");
const environment_1 = require("../../../../environments/environment");
const testing_3 = require("@angular/common/http/testing");
describe('RegionComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [region_component_1.RegionComponent],
            imports: [testing_2.RouterTestingModule, testing_3.HttpClientTestingModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(region_component_1.RegionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', testing_1.inject([environment_1.AppConf], () => {
        expect(component).toBeTruthy();
    }));
});
