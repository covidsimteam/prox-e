"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MockDataModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDataModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const users_service_1 = require("./users.service");
const electricity_service_1 = require("./electricity.service");
const smart_table_service_1 = require("./smart-table.service");
const user_activity_service_1 = require("./user-activity.service");
const orders_chart_service_1 = require("./orders-chart.service");
const profit_chart_service_1 = require("./profit-chart.service");
const traffic_list_service_1 = require("./traffic-list.service");
const periods_service_1 = require("./periods.service");
const earning_service_1 = require("./earning.service");
const orders_profit_chart_service_1 = require("./orders-profit-chart.service");
const traffic_bar_service_1 = require("./traffic-bar.service");
const profit_bar_animation_chart_service_1 = require("./profit-bar-animation-chart.service");
const temperature_humidity_service_1 = require("./temperature-humidity.service");
const solar_service_1 = require("./solar.service");
const traffic_chart_service_1 = require("./traffic-chart.service");
const stats_bar_service_1 = require("./stats-bar.service");
const country_order_service_1 = require("./country-order.service");
const stats_progress_bar_service_1 = require("./stats-progress-bar.service");
const visitors_analytics_service_1 = require("./visitors-analytics.service");
const security_cameras_service_1 = require("./security-cameras.service");
const SERVICES = [
    users_service_1.UserService,
    electricity_service_1.ElectricityService,
    smart_table_service_1.SmartTableService,
    user_activity_service_1.UserActivityService,
    orders_chart_service_1.OrdersChartService,
    profit_chart_service_1.ProfitChartService,
    traffic_list_service_1.TrafficListService,
    periods_service_1.PeriodsService,
    earning_service_1.EarningService,
    orders_profit_chart_service_1.OrdersProfitChartService,
    traffic_bar_service_1.TrafficBarService,
    profit_bar_animation_chart_service_1.ProfitBarAnimationChartService,
    temperature_humidity_service_1.TemperatureHumidityService,
    solar_service_1.SolarService,
    traffic_chart_service_1.TrafficChartService,
    stats_bar_service_1.StatsBarService,
    country_order_service_1.CountryOrderService,
    stats_progress_bar_service_1.StatsProgressBarService,
    visitors_analytics_service_1.VisitorsAnalyticsService,
    security_cameras_service_1.SecurityCamerasService,
];
let MockDataModule = MockDataModule_1 = class MockDataModule {
    static forRoot() {
        return {
            ngModule: MockDataModule_1,
            providers: [
                ...SERVICES,
            ],
        };
    }
};
MockDataModule = MockDataModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
        ],
        providers: [
            ...SERVICES,
        ],
    })
], MockDataModule);
exports.MockDataModule = MockDataModule;
