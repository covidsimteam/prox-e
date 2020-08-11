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
exports.EarningPieChartComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
let EarningPieChartComponent = class EarningPieChartComponent {
    constructor(theme) {
        this.theme = theme;
        this.selectPie = new core_1.EventEmitter();
        this.alive = true;
        this.options = {};
    }
    onChartInit(ec) {
        this.echartsInstance = ec;
    }
    onChartClick(event) {
        const pieData = {
            value: event.value,
            name: event.name,
            color: event.color.colorStops[0].color,
        };
        this.emitSelectPie(pieData);
    }
    emitSelectPie(pieData) {
        this.selectPie.emit(pieData);
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive), operators_1.delay(1))
            .subscribe(config => {
            const variables = config.variables;
            this.options = this.getOptions(variables);
            const defaultSelectedData = this.options.series[0].data.find((item) => item.name === this.defaultSelectedCurrency);
            const color = defaultSelectedData.itemStyle.normal.color.colorStops[0].color;
            const pieData = {
                value: defaultSelectedData.value,
                name: defaultSelectedData.name,
                color,
            };
            this.emitSelectPie(pieData);
        });
    }
    getOptions(variables) {
        const earningPie = variables.earningPie;
        return {
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
                    center: earningPie.center,
                    radius: earningPie.radius,
                    data: [
                        {
                            value: this.values[0].value,
                            name: this.values[0].name,
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
                                            color: earningPie.firstPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.firstPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.firstPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                        {
                            value: this.values[1].value,
                            name: this.values[1].name,
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
                                            color: earningPie.secondPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.secondPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.secondPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                        {
                            value: this.values[2].value,
                            name: this.values[2].name,
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
                                            color: earningPie.thirdPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.thirdPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.thirdPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                    ],
                },
            ],
        };
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EarningPieChartComponent.prototype, "selectPie", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], EarningPieChartComponent.prototype, "values", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EarningPieChartComponent.prototype, "defaultSelectedCurrency", void 0);
EarningPieChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-earning-pie-chart',
        styleUrls: ['./earning-card-back.component.scss'],
        template: `
    <div echarts
         class="echart"
         [options]="options"
         (chartInit)="onChartInit($event)"
         (chartClick)="onChartClick($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], EarningPieChartComponent);
exports.EarningPieChartComponent = EarningPieChartComponent;
