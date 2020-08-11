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
exports.ProfitChartService = void 0;
const core_1 = require("@angular/core");
const periods_service_1 = require("./periods.service");
const profit_chart_1 = require("../data/profit-chart");
let ProfitChartService = class ProfitChartService extends profit_chart_1.ProfitChartData {
    constructor(period) {
        super();
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        const nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForMonthPeriod() {
        const nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForYearPeriod() {
        const nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 500);
        });
    }
    getProfitChartData(period) {
        return this.data[period];
    }
};
ProfitChartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [periods_service_1.PeriodsService])
], ProfitChartService);
exports.ProfitChartService = ProfitChartService;
