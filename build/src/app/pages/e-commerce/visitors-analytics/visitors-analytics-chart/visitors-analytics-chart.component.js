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
exports.ECommerceVisitorsAnalyticsChartComponent = void 0;
const operators_1 = require("rxjs/operators");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const utils_1 = require("../../../../@core/utils");
let ECommerceVisitorsAnalyticsChartComponent = class ECommerceVisitorsAnalyticsChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.delay(1), operators_1.takeWhile(() => this.alive))
            .subscribe(config => {
            var _a;
            const eTheme = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.visitors;
            this.setOptions(eTheme);
        });
    }
    setOptions(eTheme) {
        this.option = {
            grid: {
                left: 40,
                top: 20,
                right: 0,
                bottom: 60,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: eTheme.tooltipLineColor,
                        width: eTheme.tooltipLineWidth,
                    },
                },
                textStyle: {
                    color: eTheme.tooltipTextColor,
                    fontSize: 20,
                    fontWeight: eTheme.tooltipFontWeight,
                },
                position: 'top',
                backgroundColor: eTheme.tooltipBg,
                borderColor: eTheme.tooltipBorderColor,
                borderWidth: 1,
                formatter: (params) => {
                    return Math.round(parseInt(params[0].value, 10));
                },
                extraCssText: eTheme.tooltipExtraCss,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                offset: 25,
                data: this.chartData.outerLine.map(i => i.label),
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: eTheme.axisTextColor,
                    fontSize: eTheme.axisFontSize,
                },
                axisLine: {
                    lineStyle: {
                        color: eTheme.axisLineColor,
                        width: '2',
                    },
                },
            },
            yAxis: {
                type: 'value',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: eTheme.axisLineColor,
                        width: '1',
                    },
                },
                axisLabel: {
                    color: eTheme.axisTextColor,
                    fontSize: eTheme.axisFontSize,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: eTheme.yAxisSplitLine,
                        width: '1',
                    },
                },
            },
            series: [
                this.getInnerLine(eTheme),
                this.getOuterLine(eTheme),
            ],
        };
    }
    getOuterLine(eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            itemStyle: {
                normal: {
                    opacity: 0,
                },
                emphasis: {
                    color: '#ffffff',
                    borderColor: eTheme.itemBorderColor,
                    borderWidth: 2,
                    opacity: 1,
                },
            },
            lineStyle: {
                normal: {
                    width: eTheme.lineWidth,
                    type: eTheme.lineStyle,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.lineGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.lineGradTo,
                        }]),
                    shadowColor: eTheme.lineShadow,
                    shadowBlur: 6,
                    shadowOffsetY: 12,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.areaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.areaGradTo,
                        }]),
                },
            },
            data: this.chartData.outerLine.map(i => i.value),
        };
    }
    getInnerLine(eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            tooltip: {
                show: false,
                extraCssText: '',
            },
            itemStyle: {
                normal: {
                    opacity: 0,
                },
                emphasis: {
                    opacity: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: eTheme.innerLineWidth,
                    type: eTheme.innerLineStyle,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.innerAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.innerAreaGradTo,
                        }]),
                    opacity: 1,
                },
            },
            data: this.chartData.innerLine,
        };
    }
    onChartInit(echarts) {
        this.echartsIntance = echarts;
    }
    resizeChart() {
        if (this.echartsIntance) {
            this.echartsIntance.resize();
        }
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ECommerceVisitorsAnalyticsChartComponent.prototype, "chartData", void 0);
ECommerceVisitorsAnalyticsChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-visitors-analytics-chart',
        styleUrls: ['./visitors-analytics-chart.component.scss'],
        template: `
    <div echarts
         [options]="option"
         [merge]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        utils_1.LayoutService])
], ECommerceVisitorsAnalyticsChartComponent);
exports.ECommerceVisitorsAnalyticsChartComponent = ECommerceVisitorsAnalyticsChartComponent;
