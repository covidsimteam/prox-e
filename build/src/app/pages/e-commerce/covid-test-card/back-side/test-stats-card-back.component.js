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
exports.TestStatsCardBackComponent = void 0;
const core_1 = require("@angular/core");
const stats_bar_1 = require("../../../../@core/data/stats-bar");
const operators_1 = require("rxjs/operators");
let TestStatsCardBackComponent = class TestStatsCardBackComponent {
    constructor(statsBarData) {
        this.statsBarData = statsBarData;
        this.alive = true;
        this.statsBarData.getStatsBarData()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((data) => {
            this.chartData = data;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TestStatsCardBackComponent.prototype, "testName", void 0);
TestStatsCardBackComponent = __decorate([
    core_1.Component({
        selector: 'ngx-stats-card-back',
        styleUrls: ['./test-stats-card-back.component.scss'],
        templateUrl: './test-stats-card-back.component.html',
    }),
    __metadata("design:paramtypes", [stats_bar_1.StatsBarData])
], TestStatsCardBackComponent);
exports.TestStatsCardBackComponent = TestStatsCardBackComponent;
