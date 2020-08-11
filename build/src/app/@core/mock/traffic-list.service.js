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
exports.TrafficListService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const periods_service_1 = require("./periods.service");
const traffic_list_1 = require("../data/traffic-list");
let TrafficListService = class TrafficListService extends traffic_list_1.TrafficListData {
    constructor(period) {
        super();
        this.period = period;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    getDataWeek() {
        const getFirstDateInPeriod = () => {
            const weeks = this.period.getWeeks();
            return weeks[weeks.length - 1];
        };
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    }
    getDataMonth() {
        const getFirstDateInPeriod = () => {
            const months = this.period.getMonths();
            return months[months.length - 1];
        };
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    }
    getDataYear() {
        const getFirstDateInPeriod = () => {
            const years = this.period.getYears();
            return `${parseInt(years[0], 10) - 1}`;
        };
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    }
    reduceData(timePeriods, getFirstDateInPeriod) {
        return timePeriods.reduce((result, timePeriod, index) => {
            var _a, _b, _c, _d;
            const hasResult = result[index - 1];
            const prevDate = hasResult ? (_b = (_a = result[index - 1]) === null || _a === void 0 ? void 0 : _a.comparison) === null || _b === void 0 ? void 0 : _b.nextDate :
                getFirstDateInPeriod();
            const prevValue = hasResult ? (_d = (_c = result[index - 1]) === null || _c === void 0 ? void 0 : _c.comparison) === null || _d === void 0 ? void 0 : _d.nextValue :
                this.getRandom(100);
            const nextValue = this.getRandom(100);
            const deltaValue = prevValue - nextValue;
            const item = {
                date: timePeriod,
                value: this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate,
                    prevValue,
                    nextDate: timePeriod,
                    nextValue,
                },
            };
            return [...result, item];
        }, []);
    }
    getTrafficListData(period) {
        return rxjs_1.of(this.data[period]);
    }
};
TrafficListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [periods_service_1.PeriodsService])
], TrafficListService);
exports.TrafficListService = TrafficListService;
