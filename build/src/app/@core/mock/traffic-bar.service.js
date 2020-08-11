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
exports.TrafficBarService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const periods_service_1 = require("./periods.service");
const traffic_bar_1 = require("../data/traffic-bar");
let TrafficBarService = class TrafficBarService extends traffic_bar_1.TrafficBarData {
    constructor(period) {
        super();
        this.period = period;
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    }
    getDataForMonthPeriod() {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    }
    getDataForYearPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    }
    getTrafficBarData(period) {
        return rxjs_1.of(this.data[period]);
    }
};
TrafficBarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [periods_service_1.PeriodsService])
], TrafficBarService);
exports.TrafficBarService = TrafficBarService;
