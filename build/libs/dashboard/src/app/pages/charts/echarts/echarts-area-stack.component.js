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
exports.EchartsAreaStackComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let EchartsAreaStackComponent = class EchartsAreaStackComponent {
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
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: echarts.tooltipBackgroundColor,
                        },
                    },
                },
                legend: {
                    data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
                        type: 'value',
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
                        name: 'Mail marketing',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Affiliate advertising',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video ad',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct interview',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        stack: 'Total amount',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
EchartsAreaStackComponent = __decorate([
    core_1.Component({
        selector: 'ngx-echarts-area-stack',
        template: `
    <div echarts [options]="options" class="echart"></div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], EchartsAreaStackComponent);
exports.EchartsAreaStackComponent = EchartsAreaStackComponent;
