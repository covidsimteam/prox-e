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
exports.DistrictRankingComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let DistrictRankingComponent = class DistrictRankingComponent {
    constructor(theme) {
        this.theme = theme;
    }
    ngOnInit() {
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            var _a;
            const chartjs = ((_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.chartjs) || null;
            const labels = this.labels;
            const datasets = this.dataSets;
            this.data = {
                labels,
                datasets,
            };
            this.options = {
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DistrictRankingComponent.prototype, "dataSets", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DistrictRankingComponent.prototype, "labels", void 0);
DistrictRankingComponent = __decorate([
    core_1.Component({
        selector: 'ngx-district-bar',
        template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], DistrictRankingComponent);
exports.DistrictRankingComponent = DistrictRankingComponent;
