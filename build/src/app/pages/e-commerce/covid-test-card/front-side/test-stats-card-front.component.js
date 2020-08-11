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
exports.TestStatsCardFrontComponent = void 0;
const core_1 = require("@angular/core");
const profit_bar_animation_chart_1 = require("../../../../@core/data/profit-bar-animation-chart");
const operators_1 = require("rxjs/operators");
let TestStatsCardFrontComponent = class TestStatsCardFrontComponent {
    constructor(profitBarAnimationChartService) {
        this.profitBarAnimationChartService = profitBarAnimationChartService;
        this.alive = true;
        this.profitBarAnimationChartService.getChartData()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((linesData) => {
            this.linesData = linesData;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TestStatsCardFrontComponent.prototype, "testName", void 0);
TestStatsCardFrontComponent = __decorate([
    core_1.Component({
        selector: 'ngx-stats-card-front',
        styleUrls: ['./test-stats-card-front.component.scss'],
        templateUrl: './test-stats-card-front.component.html',
    }),
    __metadata("design:paramtypes", [profit_bar_animation_chart_1.ProfitBarAnimationChartData])
], TestStatsCardFrontComponent);
exports.TestStatsCardFrontComponent = TestStatsCardFrontComponent;
