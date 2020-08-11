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
exports.EchartsBarAnimationComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let EchartsBarAnimationComponent = class EchartsBarAnimationComponent {
    constructor(theme) {
        this.theme = theme;
        this.options = {};
    }
    ngAfterViewInit() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
            var _a;
            const xAxisData = [];
            const data1 = [];
            const data2 = [];
            const colors = config === null || config === void 0 ? void 0 : config.variables;
            const echarts = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.echarts;
            this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight, colors.infoLight],
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left',
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        data: xAxisData,
                        silent: false,
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
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        data: data1,
                        animationDelay: idx => idx * 10,
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        data: data2,
                        animationDelay: idx => idx * 10 + 100,
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: idx => idx * 5,
            };
            [...Array(100).keys()].forEach((_, i) => {
                xAxisData.push('Category ' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            });
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
EchartsBarAnimationComponent = __decorate([
    core_1.Component({
        selector: 'ngx-echarts-bar-animation',
        template: `
    <div echarts [options]="options" class="echart"></div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], EchartsBarAnimationComponent);
exports.EchartsBarAnimationComponent = EchartsBarAnimationComponent;
