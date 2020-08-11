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
exports.EchartsLineComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let EchartsLineComponent = class EchartsLineComponent {
    constructor(theme) {
        this.theme = theme;
        this.options = {};
    }
    ngAfterViewInit() {
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors = config.variables;
            const echarts = config.variables.echarts;
            this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}',
                },
                legend: {
                    left: 'left',
                    data: ['Line 1', 'Line 2', 'Line 3'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'log',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
                    },
                ],
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
EchartsLineComponent = __decorate([
    core_1.Component({
        selector: 'ngx-echarts-line',
        template: `
    <div echarts [options]="options" class="echart"></div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], EchartsLineComponent);
exports.EchartsLineComponent = EchartsLineComponent;
