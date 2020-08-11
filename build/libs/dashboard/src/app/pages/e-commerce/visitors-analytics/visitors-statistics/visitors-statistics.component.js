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
exports.ECommerceVisitorsStatisticsComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
const layout_service_1 = require("../../../../@core/utils/layout.service");
let ECommerceVisitorsStatisticsComponent = class ECommerceVisitorsStatisticsComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive), operators_1.delay(1))
            .subscribe(config => {
            const variables = config.variables;
            const visitorsPieLegend = config.variables.visitorsPieLegend;
            this.setOptions(variables);
            this.setLegendItems(visitorsPieLegend);
        });
    }
    setLegendItems(visitorsPieLegend) {
        this.chartLegend = [
            {
                iconColor: visitorsPieLegend.firstSection,
                title: 'New Visitors',
            },
            {
                iconColor: visitorsPieLegend.secondSection,
                title: 'Return Visitors',
            },
        ];
    }
    setOptions(variables) {
        const visitorsPie = variables.visitorsPie;
        this.option = {
            tooltip: {
                trigger: 'item',
                formatter: '',
            },
            series: [
                {
                    name: ' ',
                    clockWise: true,
                    hoverAnimation: false,
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: visitorsPie.firstPieRadius,
                    data: [
                        {
                            value: this.value,
                            name: ' ',
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: visitorsPie.firstPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: visitorsPie.firstPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: visitorsPie.firstPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                            hoverAnimation: false,
                        },
                        {
                            value: 100 - this.value,
                            name: ' ',
                            tooltip: {
                                show: false,
                            },
                            label: {
                                normal: {
                                    position: 'inner',
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: variables.layoutBg,
                                },
                            },
                        },
                    ],
                },
                {
                    name: ' ',
                    clockWise: true,
                    hoverAnimation: false,
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: visitorsPie.secondPieRadius,
                    data: [
                        {
                            value: this.value,
                            name: ' ',
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
                                },
                            },
                            hoverAnimation: false,
                        },
                        {
                            value: 100 - this.value,
                            name: ' ',
                            tooltip: {
                                show: false,
                            },
                            label: {
                                normal: {
                                    position: 'inner',
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: visitorsPie.secondPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: visitorsPie.secondPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: visitorsPie.secondPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: visitorsPie.shadowOffsetX,
                                    shadowOffsetY: visitorsPie.shadowOffsetY,
                                },
                            },
                        },
                    ],
                },
            ],
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
    __metadata("design:type", Number)
], ECommerceVisitorsStatisticsComponent.prototype, "value", void 0);
ECommerceVisitorsStatisticsComponent = __decorate([
    core_1.Component({
        selector: 'ngx-visitors-statistics',
        styleUrls: ['./visitors-statistics.component.scss'],
        templateUrl: './visitors-statistics.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        layout_service_1.LayoutService])
], ECommerceVisitorsStatisticsComponent);
exports.ECommerceVisitorsStatisticsComponent = ECommerceVisitorsStatisticsComponent;
