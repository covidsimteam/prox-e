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
exports.PcrStatsBarAnimationChartComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
const layout_service_1 = require("../../../../@core/utils/layout.service");
let PcrStatsBarAnimationChartComponent = class PcrStatsBarAnimationChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.linesData = {
            firstLine: [],
            secondLine: [],
        };
        this.options = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((config) => {
            var _a;
            const profitBarAnimationEchart = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.profitBarAnimationEchart;
            this.setChartOption(profitBarAnimationEchart);
        });
    }
    setChartOption(chartVariables) {
        this.options = {
            color: [
                chartVariables.firstAnimationBarColor,
                chartVariables.secondAnimationBarColor,
            ],
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
            },
            legend: {
                data: ['Positive', 'Negative'],
                borderWidth: 0,
                borderRadius: 0,
                itemWidth: 15,
                itemHeight: 15,
                textStyle: {
                    color: chartVariables.textColor,
                },
            },
            tooltip: {
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    color: chartVariables.tooltipTextColor,
                    fontWeight: chartVariables.tooltipFontWeight,
                    fontSize: chartVariables.tooltipFontSize,
                },
                position: 'top',
                backgroundColor: chartVariables.tooltipBg,
                borderColor: chartVariables.tooltipBorderColor,
                borderWidth: chartVariables.tooltipBorderWidth,
                formatter: (params) => `${Math.round(parseInt(params.value, 10))}`,
                extraCssText: chartVariables.tooltipExtraCss,
            },
            xAxis: [
                {
                    data: this.linesData.firstLine.map((_, index) => index),
                    silent: false,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
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
                        show: true,
                        lineStyle: {
                            color: chartVariables.splitLineStyleColor,
                            opacity: chartVariables.splitLineStyleOpacity,
                            width: chartVariables.splitLineStyleWidth,
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'transactions',
                    type: 'bar',
                    data: this.linesData.firstLine,
                    animationDelay: (idx) => idx * 10,
                },
                {
                    name: 'orders',
                    type: 'bar',
                    data: this.linesData.secondLine,
                    animationDelay: (idx) => idx * 10 + 100,
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5,
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
], PcrStatsBarAnimationChartComponent.prototype, "linesData", void 0);
PcrStatsBarAnimationChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-stats-bar-animation-chart',
        template: `
    <div echarts
         [options]="options"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        layout_service_1.LayoutService])
], PcrStatsBarAnimationChartComponent);
exports.PcrStatsBarAnimationChartComponent = PcrStatsBarAnimationChartComponent;
