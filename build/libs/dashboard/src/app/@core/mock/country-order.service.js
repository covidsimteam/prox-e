"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryOrderService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const country_order_1 = require("../data/country-order");
let CountryOrderService = class CountryOrderService extends country_order_1.CountryOrderData {
    constructor() {
        super(...arguments);
        this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        this.countriesCategoriesLength = this.countriesCategories.length;
    }
    generateRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 20);
        });
    }
    getCountriesCategories() {
        return rxjs_1.of(this.countriesCategories);
    }
    getCountriesCategoriesData() {
        return rxjs_1.of(this.generateRandomData(this.countriesCategoriesLength));
    }
};
CountryOrderService = __decorate([
    core_1.Injectable()
], CountryOrderService);
exports.CountryOrderService = CountryOrderService;
