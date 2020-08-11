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
exports.ECommerceVisitorsAnalyticsComponent = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const theme_1 = require("@nebular/theme");
const visitors_analytics_1 = require("../../../@core/data/visitors-analytics");
const rxjs_1 = require("rxjs");
let ECommerceVisitorsAnalyticsComponent = class ECommerceVisitorsAnalyticsComponent {
    constructor(themeService, visitorsAnalyticsChartService) {
        this.themeService = themeService;
        this.visitorsAnalyticsChartService = visitorsAnalyticsChartService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(theme => {
            var _a;
            this.setLegendItems((_a = theme === null || theme === void 0 ? void 0 : theme.variables) === null || _a === void 0 ? void 0 : _a.visitorsLegend);
        });
        rxjs_1.forkJoin([
            this.visitorsAnalyticsChartService.getInnerLineChartData(),
            this.visitorsAnalyticsChartService.getOutlineLineChartData(),
            this.visitorsAnalyticsChartService.getPieChartData()
        ])
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(([innerLine, outerLine, pieChartValue]) => {
            this.visitorsAnalyticsData = {
                innerLine: innerLine,
                outerLine: outerLine,
            };
            this.pieChartValue = pieChartValue;
        });
    }
    setLegendItems(visitorsLegend) {
        this.chartLegend = [
            {
                iconColor: visitorsLegend.firstIcon,
                title: 'Land Borders',
            },
            {
                iconColor: visitorsLegend.secondIcon,
                title: 'Return Flights',
            },
        ];
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
ECommerceVisitorsAnalyticsComponent = __decorate([
    core_1.Component({
        selector: 'ngx-ecommerce-visitors-analytics',
        styleUrls: ['./visitors-analytics.component.scss'],
        templateUrl: './visitors-analytics.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        visitors_analytics_1.VisitorsAnalyticsData])
], ECommerceVisitorsAnalyticsComponent);
exports.ECommerceVisitorsAnalyticsComponent = ECommerceVisitorsAnalyticsComponent;
