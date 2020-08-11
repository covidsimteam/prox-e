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
exports.D3PieComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let D3PieComponent = class D3PieComponent {
    constructor(theme) {
        this.theme = theme;
        this.results = [
            { name: 'Germany', value: 8940 },
            { name: 'USA', value: 5000 },
            { name: 'France', value: 7200 },
        ];
        this.showLegend = true;
        this.showLabels = true;
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
D3PieComponent = __decorate([
    core_1.Component({
        selector: 'ngx-d3-pie',
        template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], D3PieComponent);
exports.D3PieComponent = D3PieComponent;
