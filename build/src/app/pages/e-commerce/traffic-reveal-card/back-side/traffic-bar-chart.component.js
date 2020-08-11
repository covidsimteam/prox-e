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
exports.TrafficBarChartComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
const layout_service_1 = require("../../../../@core/utils/layout.service");
let TrafficBarChartComponent = class TrafficBarChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    onChartInit(ec) {
        this.echartsInstance = ec;
    }
    resizeChart() {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    }
    ngOnChanges(changes) {
        if (!changes.data.isFirstChange() && !changes.labels.isFirstChange()) {
            this.echartsInstance.setOption({
                series: [{
                        data: this.data,
                    }],
                xAxis: {
                    data: this.labels,
                },
                tooltip: {
                    formatter: this.formatter,
                },
            });
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((config) => {
            var _a;
            const trafficTheme = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.trafficBarEchart;
            this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    data: this.labels,
                    axisLabel: {
                        color: trafficTheme.axisTextColor,
                        fontSize: trafficTheme.axisFontSize,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: {
                    show: false,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    boundaryGap: [0, '5%'],
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16,
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 1,
                    formatter: this.formatter,
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: this.data,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradientFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradientTo,
                                    }]),
                                opacity: 1,
                                shadowColor: trafficTheme.gradientFrom,
                                shadowBlur: trafficTheme.shadowBlur,
                            },
                        },
                    },
                ],
            });
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TrafficBarChartComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TrafficBarChartComponent.prototype, "labels", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TrafficBarChartComponent.prototype, "formatter", void 0);
TrafficBarChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-traffic-bar-chart',
        template: `
    <div echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        layout_service_1.LayoutService])
], TrafficBarChartComponent);
exports.TrafficBarChartComponent = TrafficBarChartComponent;
