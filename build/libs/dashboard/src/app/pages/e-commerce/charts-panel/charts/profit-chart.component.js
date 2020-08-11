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
exports.ProfitChartComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
const layout_service_1 = require("../../../../@core/utils/layout.service");
let ProfitChartComponent = class ProfitChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.options = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngOnChanges() {
        if (this.echartsIntance) {
            this.updateProfitChartOptions(this.profitChartData);
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(config => {
            const eTheme = config.variables.profit;
            this.setOptions(eTheme);
        });
    }
    setOptions(eTheme) {
        this.options = {
            backgroundColor: eTheme.bg,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(0, 0, 0, 0.3)',
                    },
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
                    data: this.profitChartData.chartLabel,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                        },
                    },
                    axisLabel: {
                        color: eTheme.axisTextColor,
                        fontSize: eTheme.axisFontSize,
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: eTheme.splitLineColor,
                        },
                    },
                    axisLabel: {
                        color: eTheme.axisTextColor,
                        fontSize: eTheme.axisFontSize,
                    },
                },
            ],
            series: [
                {
                    name: 'Severe',
                    type: 'bar',
                    barGap: 0,
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.firstLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.firstLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[0],
                },
                {
                    name: 'Mild',
                    type: 'bar',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.secondLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.secondLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[1],
                },
                {
                    name: 'Total',
                    type: 'bar',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.thirdLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.thirdLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[2],
                },
            ],
        };
    }
    updateProfitChartOptions(profitChartData) {
        const options = this.options;
        const series = this.getNewSeries(options.series, profitChartData.data);
        this.echartsIntance.setOption({
            series: series,
            xAxis: {
                data: this.profitChartData.chartLabel,
            },
        });
    }
    getNewSeries(series, data) {
        return series.map((line, index) => {
            return Object.assign(Object.assign({}, line), { data: data[index] });
        });
    }
    onChartInit(echarts) {
        this.echartsIntance = echarts;
    }
    resizeChart() {
        if (this.echartsIntance) {
            // Fix recalculation chart size
            // TODO: investigate more deeply
            setTimeout(() => {
                this.echartsIntance.resize();
            }, 0);
        }
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProfitChartComponent.prototype, "profitChartData", void 0);
ProfitChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-profit-chart',
        styleUrls: ['./charts-common.component.scss'],
        template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        layout_service_1.LayoutService])
], ProfitChartComponent);
exports.ProfitChartComponent = ProfitChartComponent;
