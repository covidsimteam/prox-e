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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
var CoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = exports.NB_CORE_PROVIDERS = exports.NbSimpleRoleProvider = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const rxjs_1 = require("rxjs");
const module_import_guard_1 = require("./module-import-guard");
const utils_1 = require("./utils");
const users_1 = require("./data/users");
const electricity_1 = require("./data/electricity");
const smart_table_1 = require("./data/smart-table");
const user_activity_1 = require("./data/user-activity");
const orders_chart_1 = require("./data/orders-chart");
const profit_chart_1 = require("./data/profit-chart");
const traffic_list_1 = require("./data/traffic-list");
const earning_1 = require("./data/earning");
const orders_profit_chart_1 = require("./data/orders-profit-chart");
const traffic_bar_1 = require("./data/traffic-bar");
const profit_bar_animation_chart_1 = require("./data/profit-bar-animation-chart");
const temperature_humidity_1 = require("./data/temperature-humidity");
const solar_1 = require("./data/solar");
const traffic_chart_1 = require("./data/traffic-chart");
const stats_bar_1 = require("./data/stats-bar");
const country_order_1 = require("./data/country-order");
const stats_progress_bar_1 = require("./data/stats-progress-bar");
const visitors_analytics_1 = require("./data/visitors-analytics");
const security_cameras_1 = require("./data/security-cameras");
const users_service_1 = require("./mock/users.service");
const electricity_service_1 = require("./mock/electricity.service");
const smart_table_service_1 = require("./mock/smart-table.service");
const user_activity_service_1 = require("./mock/user-activity.service");
const orders_chart_service_1 = require("./mock/orders-chart.service");
const profit_chart_service_1 = require("./mock/profit-chart.service");
const traffic_list_service_1 = require("./mock/traffic-list.service");
const earning_service_1 = require("./mock/earning.service");
const orders_profit_chart_service_1 = require("./mock/orders-profit-chart.service");
const traffic_bar_service_1 = require("./mock/traffic-bar.service");
const profit_bar_animation_chart_service_1 = require("./mock/profit-bar-animation-chart.service");
const temperature_humidity_service_1 = require("./mock/temperature-humidity.service");
const solar_service_1 = require("./mock/solar.service");
const traffic_chart_service_1 = require("./mock/traffic-chart.service");
const stats_bar_service_1 = require("./mock/stats-bar.service");
const country_order_service_1 = require("./mock/country-order.service");
const stats_progress_bar_service_1 = require("./mock/stats-progress-bar.service");
const visitors_analytics_service_1 = require("./mock/visitors-analytics.service");
const security_cameras_service_1 = require("./mock/security-cameras.service");
const mock_data_module_1 = require("./mock/mock-data.module");
const DATA_SERVICES = [
    { provide: users_1.UserData, useClass: users_service_1.UserService },
    { provide: electricity_1.ElectricityData, useClass: electricity_service_1.ElectricityService },
    { provide: smart_table_1.SmartTableData, useClass: smart_table_service_1.SmartTableService },
    { provide: user_activity_1.UserActivityData, useClass: user_activity_service_1.UserActivityService },
    { provide: orders_chart_1.OrdersChartData, useClass: orders_chart_service_1.OrdersChartService },
    { provide: profit_chart_1.ProfitChartData, useClass: profit_chart_service_1.ProfitChartService },
    { provide: traffic_list_1.TrafficListData, useClass: traffic_list_service_1.TrafficListService },
    { provide: earning_1.EarningData, useClass: earning_service_1.EarningService },
    { provide: orders_profit_chart_1.OrdersProfitChartData, useClass: orders_profit_chart_service_1.OrdersProfitChartService },
    { provide: traffic_bar_1.TrafficBarData, useClass: traffic_bar_service_1.TrafficBarService },
    { provide: profit_bar_animation_chart_1.ProfitBarAnimationChartData, useClass: profit_bar_animation_chart_service_1.ProfitBarAnimationChartService },
    { provide: temperature_humidity_1.TemperatureHumidityData, useClass: temperature_humidity_service_1.TemperatureHumidityService },
    { provide: solar_1.SolarData, useClass: solar_service_1.SolarService },
    { provide: traffic_chart_1.TrafficChartData, useClass: traffic_chart_service_1.TrafficChartService },
    { provide: stats_bar_1.StatsBarData, useClass: stats_bar_service_1.StatsBarService },
    { provide: country_order_1.CountryOrderData, useClass: country_order_service_1.CountryOrderService },
    { provide: stats_progress_bar_1.StatsProgressBarData, useClass: stats_progress_bar_service_1.StatsProgressBarService },
    { provide: visitors_analytics_1.VisitorsAnalyticsData, useClass: visitors_analytics_service_1.VisitorsAnalyticsService },
    { provide: security_cameras_1.SecurityCamerasData, useClass: security_cameras_service_1.SecurityCamerasService },
];
class NbSimpleRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return rxjs_1.of('guest');
    }
}
exports.NbSimpleRoleProvider = NbSimpleRoleProvider;
exports.NB_CORE_PROVIDERS = [
    // tslint:disable-next-line: no-non-null-assertion
    ...(_a = mock_data_module_1.MockDataModule === null || mock_data_module_1.MockDataModule === void 0 ? void 0 : mock_data_module_1.MockDataModule.forRoot()) === null || _a === void 0 ? void 0 : _a.providers,
    ...DATA_SERVICES,
    utils_1.AnalyticsService,
    utils_1.LayoutService,
    utils_1.PlayerService,
    utils_1.SeoService,
    utils_1.StateService,
];
let CoreModule = CoreModule_1 = class CoreModule {
    constructor(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    static forRoot() {
        return {
            ngModule: CoreModule_1,
            providers: [
                ...exports.NB_CORE_PROVIDERS,
            ],
        };
    }
};
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
        ],
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
