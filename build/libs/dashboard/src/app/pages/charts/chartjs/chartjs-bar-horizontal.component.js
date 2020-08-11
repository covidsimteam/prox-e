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
exports.ChartjsBarHorizontalComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let ChartjsBarHorizontalComponent = class ChartjsBarHorizontalComponent {
    constructor(theme) {
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors = config.variables;
            const chartjs = config.variables.chartjs;
            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: colors.infoLight,
                        borderWidth: 1,
                        data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                    }, {
                        label: 'Dataset 2',
                        backgroundColor: colors.successLight,
                        data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                    },
                ],
            };
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
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
                    yAxes: [
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
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
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
ChartjsBarHorizontalComponent = __decorate([
    core_1.Component({
        selector: 'ngx-chartjs-bar-horizontal',
        template: `
    <chart type="horizontalBar" [data]="data" [options]="options"></chart>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], ChartjsBarHorizontalComponent);
exports.ChartjsBarHorizontalComponent = ChartjsBarHorizontalComponent;
