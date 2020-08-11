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
exports.EarningLiveUpdateChartComponent = void 0;
const operators_1 = require("rxjs/operators");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const layout_service_1 = require("../../../../@core/utils/layout.service");
let EarningLiveUpdateChartComponent = class EarningLiveUpdateChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngOnChanges() {
        if (this.option) {
            this.updateChartOptions(this.liveUpdateChartData);
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.delay(1), operators_1.takeWhile(() => this.alive))
            .subscribe(config => {
            const earningLineTheme = config.variables.earningLine;
            this.setChartOption(earningLineTheme);
        });
    }
    setChartOption(earningLineTheme) {
        this.option = {
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
            },
            xAxis: {
                type: 'time',
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            yAxis: {
                boundaryGap: [0, '5%'],
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            tooltip: {
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    color: earningLineTheme.tooltipTextColor,
                    fontWeight: earningLineTheme.tooltipFontWeight,
                    fontSize: earningLineTheme.tooltipFontSize,
                },
                position: 'top',
                backgroundColor: earningLineTheme.tooltipBg,
                borderColor: earningLineTheme.tooltipBorderColor,
                borderWidth: earningLineTheme.tooltipBorderWidth,
                formatter: params => `$ ${Math.round(parseInt(params.value[1], 10))}`,
                extraCssText: earningLineTheme.tooltipExtraCss,
            },
            series: [
                {
                    type: 'line',
                    symbol: 'circle',
                    sampling: 'average',
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
                            width: 0,
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: earningLineTheme.gradFrom,
                                }, {
                                    offset: 1,
                                    color: earningLineTheme.gradTo,
                                }]),
                            opacity: 1,
                        },
                    },
                    data: this.liveUpdateChartData,
                },
            ],
            animation: true,
        };
    }
    updateChartOptions(chartData) {
        this.echartsInstance.setOption({
            series: [{
                    data: chartData,
                }],
        });
    }
    onChartInit(ec) {
        this.echartsInstance = ec;
    }
    resizeChart() {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], EarningLiveUpdateChartComponent.prototype, "liveUpdateChartData", void 0);
EarningLiveUpdateChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-earning-live-update-chart',
        styleUrls: ['earning-card-front.component.scss'],
        template: `
    <div echarts
         class="echart"
         [options]="option"
         (chartInit)="onChartInit($event)"></div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        layout_service_1.LayoutService])
], EarningLiveUpdateChartComponent);
exports.EarningLiveUpdateChartComponent = EarningLiveUpdateChartComponent;
