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
exports.ChartPanelHeaderComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
let ChartPanelHeaderComponent = class ChartPanelHeaderComponent {
    constructor(themeService, breakpointService) {
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.alive = true;
        this.periodChange = new core_1.EventEmitter();
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.breakpoint = { name: '', width: 0 };
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(theme => {
            const orderProfitLegend = theme.variables.orderProfitLegend;
            this.currentTheme = theme.name;
            this.setLegendItems(orderProfitLegend);
        });
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(([oldValue, newValue]) => {
            this.breakpoint = newValue;
        });
    }
    setLegendItems(orderProfitLegend) {
        this.chartLegend = [
            {
                iconColor: orderProfitLegend.firstItem,
                title: 'Severe',
            },
            {
                iconColor: orderProfitLegend.secondItem,
                title: 'Mild',
            },
            {
                iconColor: orderProfitLegend.thirdItem,
                title: 'All',
            },
        ];
    }
    changePeriod(period) {
        this.type = period;
        this.periodChange.emit(period);
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPanelHeaderComponent.prototype, "periodChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartPanelHeaderComponent.prototype, "type", void 0);
ChartPanelHeaderComponent = __decorate([
    core_1.Component({
        selector: 'ngx-chart-panel-header',
        styleUrls: ['./chart-panel-header.component.scss'],
        templateUrl: './chart-panel-header.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        theme_1.NbMediaBreakpointsService])
], ChartPanelHeaderComponent);
exports.ChartPanelHeaderComponent = ChartPanelHeaderComponent;
