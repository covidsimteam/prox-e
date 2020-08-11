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
exports.ProfitBarAnimationChartService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const profit_bar_animation_chart_1 = require("../data/profit-bar-animation-chart");
let ProfitBarAnimationChartService = class ProfitBarAnimationChartService extends profit_bar_animation_chart_1.ProfitBarAnimationChartData {
    constructor() {
        super();
        this.data = {
            firstLine: this.getDataForFirstLine(),
            secondLine: this.getDataForSecondLine(),
        };
    }
    getDataForFirstLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    getDataForSecondLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    createEmptyArray(nPoints) {
        return Array.from(Array(nPoints));
    }
    getChartData() {
        return rxjs_1.of(this.data);
    }
};
ProfitBarAnimationChartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProfitBarAnimationChartService);
exports.ProfitBarAnimationChartService = ProfitBarAnimationChartService;
