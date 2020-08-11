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
exports.ECommerceChartsPanelComponent = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const orders_chart_component_1 = require("./charts/orders-chart.component");
const profit_chart_component_1 = require("./charts/profit-chart.component");
const orders_profit_chart_1 = require("../../../@core/data/orders-profit-chart");
let ECommerceChartsPanelComponent = class ECommerceChartsPanelComponent {
    constructor(ordersProfitChartService) {
        this.ordersProfitChartService = ordersProfitChartService;
        this.alive = true;
        this.period = 'week';
        this.ordersProfitChartService.getOrderProfitChartSummary()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe((summary) => {
            this.chartPanelSummary = summary;
        });
        this.getOrdersChartData(this.period);
        this.getProfitChartData(this.period);
    }
    setPeriodAndGetChartData(value) {
        if (this.period !== value) {
            this.period = value;
        }
        this.getOrdersChartData(value);
        this.getProfitChartData(value);
    }
    changeTab(selectedTab) {
        if (selectedTab.tabTitle === 'Profit') {
            this.profitChart.resizeChart();
        }
        else {
            this.ordersChart.resizeChart();
        }
    }
    getOrdersChartData(period) {
        this.ordersProfitChartService.getOrdersChartData(period)
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(ordersChartData => {
            this.ordersChartData = ordersChartData;
        });
    }
    getProfitChartData(period) {
        this.ordersProfitChartService.getProfitChartData(period)
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(profitChartData => {
            this.profitChartData = profitChartData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.ViewChild('ordersChart', { static: true }),
    __metadata("design:type", orders_chart_component_1.OrdersChartComponent)
], ECommerceChartsPanelComponent.prototype, "ordersChart", void 0);
__decorate([
    core_1.ViewChild('profitChart', { static: true }),
    __metadata("design:type", profit_chart_component_1.ProfitChartComponent)
], ECommerceChartsPanelComponent.prototype, "profitChart", void 0);
ECommerceChartsPanelComponent = __decorate([
    core_1.Component({
        selector: 'ngx-ecommerce-charts',
        styleUrls: ['./charts-panel.component.scss'],
        templateUrl: './charts-panel.component.html',
    }),
    __metadata("design:paramtypes", [orders_profit_chart_1.OrdersProfitChartData])
], ECommerceChartsPanelComponent);
exports.ECommerceChartsPanelComponent = ECommerceChartsPanelComponent;
