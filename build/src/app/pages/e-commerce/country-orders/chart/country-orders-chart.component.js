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
exports.CountryOrdersChartComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
const layout_service_1 = require("../../../../@core/utils/layout.service");
let CountryOrdersChartComponent = class CountryOrdersChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngOnChanges(changes) {
        if (changes.data && !changes.data.isFirstChange()) {
            this.echartsInstance.setOption({
                series: [
                    {
                        data: this.data.map((_) => this.maxValue),
                    },
                    {
                        data: this.data,
                    },
                    {
                        data: this.data,
                    },
                ],
            });
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((config) => {
            var _a;
            const countriesTheme = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.countryOrders;
            this.option = Object.assign({}, {
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true,
                },
                xAxis: {
                    axisLabel: {
                        color: countriesTheme.chartAxisTextColor,
                        fontSize: countriesTheme.chartAxisFontSize,
                    },
                    axisLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisLineColor,
                            width: '2',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                yAxis: {
                    data: this.labels,
                    axisLabel: {
                        color: countriesTheme.chartAxisTextColor,
                        fontSize: countriesTheme.chartAxisFontSize,
                    },
                    axisLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisLineColor,
                            width: '2',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [
                    {
                        type: 'bar',
                        data: this.data.map((_) => this.maxValue),
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: countriesTheme.chartInnerLineColor,
                            },
                            opacity: 1,
                        },
                        barWidth: '40%',
                        barGap: '-100%',
                        barCategoryGap: '30%',
                        animation: false,
                        z: 1,
                    },
                    {
                        type: 'bar',
                        data: this.data,
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: countriesTheme.chartLineBottomShadowColor,
                            },
                            opacity: 1,
                        },
                        barWidth: '40%',
                        barGap: '-100%',
                        barCategoryGap: '30%',
                        z: 2,
                    },
                    {
                        type: 'bar',
                        barWidth: '35%',
                        data: this.data,
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                        offset: 0,
                                        color: countriesTheme.chartGradientFrom,
                                    }, {
                                        offset: 1,
                                        color: countriesTheme.chartGradientTo,
                                    }]),
                            },
                        },
                        z: 3,
                    },
                ],
            });
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
    __metadata("design:type", String)
], CountryOrdersChartComponent.prototype, "countryName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CountryOrdersChartComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CountryOrdersChartComponent.prototype, "maxValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CountryOrdersChartComponent.prototype, "labels", void 0);
CountryOrdersChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-country-orders-chart',
        styleUrls: ['./country-orders-chart.component.scss'],
        template: `
    <div class="header">
      <span class="caption">Selected Country/Region</span>
      <h2 class="h4">{{ countryName }}</h2>
    </div>
    <div echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        layout_service_1.LayoutService])
], CountryOrdersChartComponent);
exports.CountryOrdersChartComponent = CountryOrdersChartComponent;
