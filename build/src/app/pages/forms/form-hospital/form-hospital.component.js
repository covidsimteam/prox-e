"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormHospitalComponent = void 0;
const core_1 = require("@angular/core");
const countries_geo_1 = require("../../../@core/data/countries.geo");
const province_districts_geo_1 = require("../../../@core/data/province-districts.geo");
class TestRecord {
}
class SymptomRecord {
}
let FormHospitalComponent = class FormHospitalComponent {
    constructor() {
        this.districts = { destinationOpts: this.destinationOpts, addressOpts: this.addressOpts };
        this.permanentAddrProvince = '';
        this.finalDestProvince = '';
        this.addTransitCountries = false;
        this.pcrRecords = [];
        this.rdtRecords = [];
        this.symptomRecords = [];
        this.relationName = 'Father';
        this.status = 'Recovery';
    }
    ngOnInit() {
        this.countries = countries_geo_1.COUNTRIES;
        this.nearbyCountries = countries_geo_1.NEARBY_COUNTRIES;
        this.provinces = province_districts_geo_1.PROVINCES.map(province => province.name);
    }
    changeAddrProvince(event) {
        var _a;
        this.permanentAddrProvince = event;
        this.districts.addressOpts = (_a = province_districts_geo_1.PROVINCES === null || province_districts_geo_1.PROVINCES === void 0 ? void 0 : province_districts_geo_1.PROVINCES.find(province => province.name === this.permanentAddrProvince)) === null || _a === void 0 ? void 0 : _a.districts;
    }
    changeDestProvince(event) {
        var _a;
        this.finalDestProvince = event;
        this.districts.destinationOpts = (_a = province_districts_geo_1.PROVINCES === null || province_districts_geo_1.PROVINCES === void 0 ? void 0 : province_districts_geo_1.PROVINCES.find(province => province.name === this.finalDestProvince)) === null || _a === void 0 ? void 0 : _a.districts;
    }
    changeRelationship(event) {
        this.relationName = event;
    }
    statusChange(event) {
        this.status = event;
    }
    addSymptomRecord(_) {
        this.symptomRecords = [...this.symptomRecords, new SymptomRecord()];
    }
    addPCRRecord(_) {
        this.pcrRecords = [...this.pcrRecords, new TestRecord()];
    }
    addRDTRecord(_) {
        this.rdtRecords = [...this.rdtRecords, new TestRecord()];
    }
};
FormHospitalComponent = __decorate([
    core_1.Component({
        selector: 'ngx-form-hospital',
        styleUrls: ['./form-hospital.component.scss'],
        templateUrl: './form-hospital.component.html',
    })
], FormHospitalComponent);
exports.FormHospitalComponent = FormHospitalComponent;
