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
exports.ChartjsPieComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let ChartjsPieComponent = class ChartjsPieComponent {
    constructor(theme) {
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
            var _a;
            const colors = config === null || config === void 0 ? void 0 : config.variables;
            const chartjs = (_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.chartjs;
            this.data = {
                labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                datasets: [{
                        data: [300, 500, 100],
                        backgroundColor: [colors === null || colors === void 0 ? void 0 : colors.primaryLight, colors === null || colors === void 0 ? void 0 : colors.infoLight, colors === null || colors === void 0 ? void 0 : colors.successLight],
                    }],
            };
            this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
ChartjsPieComponent = __decorate([
    core_1.Component({
        selector: 'ngx-chartjs-pie',
        template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], ChartjsPieComponent);
exports.ChartjsPieComponent = ChartjsPieComponent;
