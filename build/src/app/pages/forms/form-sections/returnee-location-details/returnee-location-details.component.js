"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturneeLocationDetailsComponent = void 0;
const core_1 = require("@angular/core");
const countries_geo_1 = require("../../../../@core/data/countries.geo");
const province_districts_geo_1 = require("../../../../@core/data/province-districts.geo");
let ReturneeLocationDetailsComponent = class ReturneeLocationDetailsComponent {
    constructor() {
        this.districts = { destinationOpts: this.destinationOpts, addressOpts: this.addressOpts };
        this.permanentAddrProvince = '';
        this.finalDestProvince = '';
    }
    ngOnInit() {
        this.countries = countries_geo_1.COUNTRIES;
        this.nearbyCountries = countries_geo_1.NEARBY_COUNTRIES;
        this.nepalAndNeighbors = ['Nepal', ...countries_geo_1.NEARBY_COUNTRIES];
        this.provinces = province_districts_geo_1.PROVINCES === null || province_districts_geo_1.PROVINCES === void 0 ? void 0 : province_districts_geo_1.PROVINCES.map(province => province.name);
    }
    changeAddrProvince(event) {
        var _a;
        this.permanentAddrProvince = event;
        this.districts.addressOpts = (_a = province_districts_geo_1.PROVINCES === null || province_districts_geo_1.PROVINCES === void 0 ? void 0 : province_districts_geo_1.PROVINCES.find(province => province.name === this.finalDestProvince)) === null || _a === void 0 ? void 0 : _a.districts;
    }
    changeDestProvince(event) {
        var _a;
        this.finalDestProvince = event;
        this.districts.destinationOpts = (_a = province_districts_geo_1.PROVINCES === null || province_districts_geo_1.PROVINCES === void 0 ? void 0 : province_districts_geo_1.PROVINCES.find(province => province.name === this.finalDestProvince)) === null || _a === void 0 ? void 0 : _a.districts;
    }
};
ReturneeLocationDetailsComponent = __decorate([
    core_1.Component({
        selector: 'ngx-returnee-location-details',
        templateUrl: './returnee-location-details.component.html',
        styleUrls: ['./returnee-location-details.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ReturneeLocationDetailsComponent);
exports.ReturneeLocationDetailsComponent = ReturneeLocationDetailsComponent;
