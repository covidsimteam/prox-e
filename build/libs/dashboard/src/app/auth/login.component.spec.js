"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/router/testing");
const testing_3 = require("@angular/common/http/testing");
const login_component_1 = require("./login.component");
const forms_1 = require("@angular/forms");
const environment_1 = require("../../environments/environment");
describe('LoginComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent],
            providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
            imports: [forms_1.ReactiveFormsModule, forms_1.FormsModule, testing_2.RouterTestingModule, testing_3.HttpClientTestingModule],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', testing_1.inject([environment_1.AppConf], () => {
        expect(component).toBeTruthy();
    }));
});
