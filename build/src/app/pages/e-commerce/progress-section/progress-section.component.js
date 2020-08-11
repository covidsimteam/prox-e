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
exports.ECommerceProgressSectionComponent = void 0;
const core_1 = require("@angular/core");
const stats_progress_bar_1 = require("../../../@core/data/stats-progress-bar");
const operators_1 = require("rxjs/operators");
let ECommerceProgressSectionComponent = class ECommerceProgressSectionComponent {
    constructor(statsProgressBarService) {
        this.statsProgressBarService = statsProgressBarService;
        this.alive = true;
        this.statsProgressBarService.getProgressInfoData()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((data) => {
            this.progressInfoData = data;
        });
    }
    ngOnDestroy() {
        this.alive = true;
    }
};
ECommerceProgressSectionComponent = __decorate([
    core_1.Component({
        selector: 'ngx-progress-section',
        styleUrls: ['./progress-section.component.scss'],
        templateUrl: './progress-section.component.html',
    }),
    __metadata("design:paramtypes", [stats_progress_bar_1.StatsProgressBarData])
], ECommerceProgressSectionComponent);
exports.ECommerceProgressSectionComponent = ECommerceProgressSectionComponent;
