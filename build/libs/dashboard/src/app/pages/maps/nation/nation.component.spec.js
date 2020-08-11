"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const nation_component_1 = require("./nation.component");
const testing_2 = require("@angular/router/testing");
const environment_1 = require("../../../../environments/environment");
const testing_3 = require("@angular/common/http/testing");
describe('NationComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [nation_component_1.NationComponent],
            imports: [testing_2.RouterTestingModule, testing_3.HttpClientTestingModule],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(nation_component_1.NationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', testing_1.inject([environment_1.AppConf], () => {
        expect(component).toBeTruthy();
    }));
});
