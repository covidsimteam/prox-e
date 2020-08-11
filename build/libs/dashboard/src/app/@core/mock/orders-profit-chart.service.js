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
exports.OrdersProfitChartService = void 0;
const rxjs_1 = require("rxjs");
const core_1 = require("@angular/core");
const orders_chart_1 = require("../data/orders-chart");
const orders_profit_chart_1 = require("../data/orders-profit-chart");
const profit_chart_1 = require("../data/profit-chart");
let OrdersProfitChartService = class OrdersProfitChartService extends orders_profit_chart_1.OrdersProfitChartData {
    constructor(ordersChartService, profitChartService) {
        super();
        this.ordersChartService = ordersChartService;
        this.profitChartService = profitChartService;
        this.summary = [
            {
                title: 'Total',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
    }
    getOrderProfitChartSummary() {
        return rxjs_1.of(this.summary);
    }
    getOrdersChartData(period) {
        return rxjs_1.of(this.ordersChartService.getOrdersChartData(period));
    }
    getProfitChartData(period) {
        return rxjs_1.of(this.profitChartService.getProfitChartData(period));
    }
};
OrdersProfitChartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [orders_chart_1.OrdersChartData,
        profit_chart_1.ProfitChartData])
], OrdersProfitChartService);
exports.OrdersProfitChartService = OrdersProfitChartService;
