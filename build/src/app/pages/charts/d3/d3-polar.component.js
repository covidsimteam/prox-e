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
exports.D3PolarComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let D3PolarComponent = class D3PolarComponent {
    constructor(theme) {
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '1990',
                        value: 31476,
                    },
                    {
                        name: '2000',
                        value: 36953,
                    },
                    {
                        name: '2010',
                        value: 40632,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '1990',
                        value: 37060,
                    },
                    {
                        name: '2000',
                        value: 45986,
                    },
                    {
                        name: '2010',
                        value: 49737,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '1990',
                        value: 29476,
                    },
                    {
                        name: '2000',
                        value: 34774,
                    },
                    {
                        name: '2010',
                        value: 36240,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors = config.variables;
            this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
D3PolarComponent = __decorate([
    core_1.Component({
        selector: 'ngx-d3-polar',
        template: `
    <ngx-charts-polar-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale">
    </ngx-charts-polar-chart>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], D3PolarComponent);
exports.D3PolarComponent = D3PolarComponent;
