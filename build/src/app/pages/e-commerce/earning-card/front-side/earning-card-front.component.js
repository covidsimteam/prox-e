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
exports.EarningCardFrontComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const earning_1 = require("../../../../@core/data/earning");
let EarningCardFrontComponent = class EarningCardFrontComponent {
    constructor(themeService, earningService) {
        this.themeService = themeService;
        this.earningService = earningService;
        this.alive = true;
        this.selectedCurrency = 'Bitcoin';
        this.currencies = ['Bitcoin', 'Tether', 'Ethereum'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }
    ngOnInit() {
        this.getEarningCardData(this.selectedCurrency);
    }
    changeCurrency(currency) {
        if (this.selectedCurrency !== currency) {
            this.selectedCurrency = currency;
            this.getEarningCardData(this.selectedCurrency);
        }
    }
    getEarningCardData(currency) {
        this.earningService.getEarningCardData(currency)
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((earningLiveUpdateCardData) => {
            this.earningLiveUpdateCardData = earningLiveUpdateCardData;
            this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;
            this.startReceivingLiveData(currency);
        });
    }
    startReceivingLiveData(currency) {
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
        }
        this.intervalSubscription = rxjs_1.interval(200)
            .pipe(operators_1.takeWhile(() => this.alive), operators_1.switchMap(() => this.earningService.getEarningLiveUpdateCardData(currency)))
            .subscribe((liveUpdateChartData) => {
            this.liveUpdateChartData = [...liveUpdateChartData];
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EarningCardFrontComponent.prototype, "selectedCurrency", void 0);
EarningCardFrontComponent = __decorate([
    core_1.Component({
        selector: 'ngx-earning-card-front',
        styleUrls: ['./earning-card-front.component.scss'],
        templateUrl: './earning-card-front.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        earning_1.EarningData])
], EarningCardFrontComponent);
exports.EarningCardFrontComponent = EarningCardFrontComponent;
