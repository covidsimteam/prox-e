"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceModule = void 0;
const core_1 = require("@angular/core");
const ngx_leaflet_1 = require("@asymmetrik/ngx-leaflet");
const theme_1 = require("@nebular/theme");
const ngx_charts_1 = require("@swimlane/ngx-charts");
const angular2_chartjs_1 = require("angular2-chartjs");
const theme_module_1 = require("../../@theme/theme.module");
const chart_panel_header_component_1 = require("./charts-panel/chart-panel-header/chart-panel-header.component");
const chart_panel_summary_component_1 = require("./charts-panel/chart-panel-summary/chart-panel-summary.component");
const charts_panel_component_1 = require("./charts-panel/charts-panel.component");
const orders_chart_component_1 = require("./charts-panel/charts/orders-chart.component");
const profit_chart_component_1 = require("./charts-panel/charts/profit-chart.component");
const country_orders_chart_component_1 = require("./country-orders/chart/country-orders-chart.component");
const country_orders_component_1 = require("./country-orders/country-orders.component");
const country_orders_map_component_1 = require("./country-orders/map/country-orders-map.component");
const country_orders_map_service_1 = require("./country-orders/map/country-orders-map.service");
const test_stats_area_chart_component_1 = require("./covid-test-card/back-side/test-stats-area-chart.component");
const test_stats_card_back_component_1 = require("./covid-test-card/back-side/test-stats-card-back.component");
const test_stats_bar_animation_chart_component_1 = require("./covid-test-card/front-side/test-stats-bar-animation-chart.component");
const test_stats_card_front_component_1 = require("./covid-test-card/front-side/test-stats-card-front.component");
const test_card_component_1 = require("./covid-test-card/test-card.component");
const e_commerce_component_1 = require("./e-commerce.component");
const earning_card_back_component_1 = require("./earning-card/back-side/earning-card-back.component");
const earning_pie_chart_component_1 = require("./earning-card/back-side/earning-pie-chart.component");
const earning_card_component_1 = require("./earning-card/earning-card.component");
const earning_card_front_component_1 = require("./earning-card/front-side/earning-card-front.component");
const earning_live_update_chart_component_1 = require("./earning-card/front-side/earning-live-update-chart.component");
const legend_chart_component_1 = require("./legend-chart/legend-chart.component");
const progress_section_component_1 = require("./progress-section/progress-section.component");
const slide_out_component_1 = require("./slide-out/slide-out.component");
const traffic_back_card_component_1 = require("./traffic-reveal-card/back-side/traffic-back-card.component");
const traffic_bar_chart_component_1 = require("./traffic-reveal-card/back-side/traffic-bar-chart.component");
const traffic_bar_component_1 = require("./traffic-reveal-card/front-side/traffic-bar/traffic-bar.component");
const traffic_front_card_component_1 = require("./traffic-reveal-card/front-side/traffic-front-card.component");
const traffic_cards_header_component_1 = require("./traffic-reveal-card/traffic-cards-header/traffic-cards-header.component");
const traffic_reveal_card_component_1 = require("./traffic-reveal-card/traffic-reveal-card.component");
const user_activity_component_1 = require("./user-activity/user-activity.component");
const visitors_analytics_chart_component_1 = require("./visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component");
const visitors_analytics_component_1 = require("./visitors-analytics/visitors-analytics.component");
const visitors_statistics_component_1 = require("./visitors-analytics/visitors-statistics/visitors-statistics.component");
const ngx_echarts_1 = require("ngx-echarts");
let ECommerceModule = class ECommerceModule {
};
ECommerceModule = __decorate([
    core_1.NgModule({
        imports: [
            theme_module_1.ThemeModule,
            theme_1.NbCardModule,
            theme_1.NbUserModule,
            theme_1.NbButtonModule,
            theme_1.NbIconModule,
            theme_1.NbTabsetModule,
            theme_1.NbSelectModule,
            theme_1.NbListModule,
            angular2_chartjs_1.ChartModule,
            theme_1.NbProgressBarModule,
            ngx_echarts_1.NgxEchartsModule,
            ngx_charts_1.NgxChartsModule,
            ngx_leaflet_1.LeafletModule,
        ],
        declarations: [
            e_commerce_component_1.ECommerceComponent,
            charts_panel_component_1.ECommerceChartsPanelComponent,
            chart_panel_header_component_1.ChartPanelHeaderComponent,
            chart_panel_summary_component_1.ChartPanelSummaryComponent,
            orders_chart_component_1.OrdersChartComponent,
            profit_chart_component_1.ProfitChartComponent,
            test_stats_card_back_component_1.TestStatsCardBackComponent,
            traffic_reveal_card_component_1.TrafficRevealCardComponent,
            traffic_bar_chart_component_1.TrafficBarChartComponent,
            traffic_front_card_component_1.TrafficFrontCardComponent,
            traffic_back_card_component_1.TrafficBackCardComponent,
            traffic_bar_component_1.TrafficBarComponent,
            traffic_cards_header_component_1.TrafficCardsHeaderComponent,
            country_orders_component_1.CountryOrdersComponent,
            country_orders_map_component_1.CountryOrdersMapComponent,
            country_orders_chart_component_1.CountryOrdersChartComponent,
            visitors_analytics_component_1.ECommerceVisitorsAnalyticsComponent,
            visitors_analytics_chart_component_1.ECommerceVisitorsAnalyticsChartComponent,
            visitors_statistics_component_1.ECommerceVisitorsStatisticsComponent,
            legend_chart_component_1.ECommerceLegendChartComponent,
            user_activity_component_1.ECommerceUserActivityComponent,
            progress_section_component_1.ECommerceProgressSectionComponent,
            slide_out_component_1.SlideOutComponent,
            earning_card_component_1.EarningCardComponent,
            earning_card_front_component_1.EarningCardFrontComponent,
            earning_card_back_component_1.EarningCardBackComponent,
            earning_pie_chart_component_1.EarningPieChartComponent,
            earning_live_update_chart_component_1.EarningLiveUpdateChartComponent,
            test_card_component_1.TestCardComponent,
            test_stats_card_front_component_1.TestStatsCardFrontComponent,
            test_stats_area_chart_component_1.TestStatsAreaChartComponent,
            test_stats_bar_animation_chart_component_1.PcrStatsBarAnimationChartComponent,
        ],
        providers: [
            country_orders_map_service_1.CountryOrdersMapService,
        ],
    })
], ECommerceModule);
exports.ECommerceModule = ECommerceModule;
