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
exports.EchartsPieComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let EchartsPieComponent = class EchartsPieComponent {
    constructor(theme) {
        this.theme = theme;
        this.options = {};
    }
    ngAfterViewInit() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
            var _a;
            const colors = config === null || config === void 0 ? void 0 : config.variables;
            const echarts = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.echarts;
            this.options = {
                backgroundColor: echarts === null || echarts === void 0 ? void 0 : echarts.bg,
                color: [
                    colors === null || colors === void 0 ? void 0 : colors.warningLight,
                    colors === null || colors === void 0 ? void 0 : colors.infoLight,
                    colors === null || colors === void 0 ? void 0 : colors.dangerLight,
                    colors === null || colors === void 0 ? void 0 : colors.successLight,
                    colors === null || colors === void 0 ? void 0 : colors.primaryLight
                ],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                series: [
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 335, name: 'Germany' },
                            { value: 310, name: 'France' },
                            { value: 234, name: 'Canada' },
                            { value: 135, name: 'Russia' },
                            { value: 1548, name: 'USA' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
EchartsPieComponent = __decorate([
    core_1.Component({
        selector: 'ngx-echarts-pie',
        template: `
    <div echarts [options]="options" class="echart"></div>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], EchartsPieComponent);
exports.EchartsPieComponent = EchartsPieComponent;
