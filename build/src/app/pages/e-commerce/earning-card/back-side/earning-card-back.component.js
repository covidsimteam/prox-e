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
exports.EarningCardBackComponent = void 0;
const core_1 = require("@angular/core");
const earning_1 = require("../../../../@core/data/earning");
const operators_1 = require("rxjs/operators");
let EarningCardBackComponent = class EarningCardBackComponent {
    constructor(earningService) {
        this.earningService = earningService;
        this.alive = true;
        this.defaultSelectedCurrency = 'Bitcoin';
        this.earningService.getEarningPieChartData()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((earningPieChartData) => {
            this.earningPieChartData = earningPieChartData;
        });
    }
    changeChartInfo(pieData) {
        this.value = pieData.value;
        this.name = pieData.name;
        this.color = pieData.color;
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
EarningCardBackComponent = __decorate([
    core_1.Component({
        selector: 'ngx-earning-card-back',
        styleUrls: ['./earning-card-back.component.scss'],
        templateUrl: './earning-card-back.component.html',
    }),
    __metadata("design:paramtypes", [earning_1.EarningData])
], EarningCardBackComponent);
exports.EarningCardBackComponent = EarningCardBackComponent;
