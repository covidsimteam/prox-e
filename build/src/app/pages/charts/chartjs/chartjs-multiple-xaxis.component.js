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
exports.ChartjsMultipleXaxisComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let ChartjsMultipleXaxisComponent = class ChartjsMultipleXaxisComponent {
    constructor(theme) {
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
            var _a;
            const colors = config === null || config === void 0 ? void 0 : config.variables;
            const chartjs = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.chartjs;
            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'dataset - big points',
                        data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                        borderColor: colors.primary,
                        backgroundColor: colors.primary,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - individual point sizes',
                        data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                        borderColor: colors.dangerLight,
                        backgroundColor: colors.dangerLight,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHoverRadius',
                        data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                        borderColor: colors.info,
                        backgroundColor: colors.info,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHitRadius',
                        data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                        borderColor: colors.success,
                        backgroundColor: colors.success,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }],
            };
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                            },
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
    random() {
        return Math.round(Math.random() * 100);
    }
};
ChartjsMultipleXaxisComponent = __decorate([
    core_1.Component({
        selector: 'ngx-chartjs-multiple-xaxis',
        template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], ChartjsMultipleXaxisComponent);
exports.ChartjsMultipleXaxisComponent = ChartjsMultipleXaxisComponent;
