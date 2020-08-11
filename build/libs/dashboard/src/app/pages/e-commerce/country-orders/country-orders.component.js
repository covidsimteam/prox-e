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
exports.CountryOrdersComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
const country_order_1 = require("../../../@core/data/country-order");
let CountryOrdersComponent = class CountryOrdersComponent {
    constructor(themeService, breakpointService, countryOrderService) {
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.countryOrderService = countryOrderService;
        this.alive = true;
        this.countryName = '';
        this.countryData = [];
        this.breakpoint = { name: '', width: 0 };
        this.breakpoints = this.breakpointService.getBreakpointsMap();
    }
    ngOnInit() {
        this.themeService.onMediaQueryChange()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(([oldValue, newValue]) => {
            this.breakpoint = newValue;
        });
        this.countryOrderService.getCountriesCategories()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((countriesCategories) => {
            this.countriesCategories = countriesCategories;
        });
    }
    selectCountryById(countryName) {
        this.countryName = countryName;
        this.countryOrderService.getCountriesCategoriesData(countryName)
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((countryData) => {
            this.countryData = countryData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
CountryOrdersComponent = __decorate([
    core_1.Component({
        selector: 'ngx-country-orders',
        styleUrls: ['./country-orders.component.scss'],
        template: `
    <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'giant'">
      <nb-card-header>Country Orders Statistics</nb-card-header>
      <nb-card-body>
        <ngx-country-orders-map (select)="selectCountryById($event)"
                                countryId="USA">
        </ngx-country-orders-map>
        <ngx-country-orders-chart [countryName]="countryName"
                                  [data]="countryData"
                                  [labels]="countriesCategories"
                                  maxValue="20">
        </ngx-country-orders-chart>
      </nb-card-body>
    </nb-card>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        theme_1.NbMediaBreakpointsService,
        country_order_1.CountryOrderData])
], CountryOrdersComponent);
exports.CountryOrdersComponent = CountryOrdersComponent;
