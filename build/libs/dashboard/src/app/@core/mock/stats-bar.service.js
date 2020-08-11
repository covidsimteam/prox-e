"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsBarService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const stats_bar_1 = require("../data/stats-bar");
let StatsBarService = class StatsBarService extends stats_bar_1.StatsBarData {
    constructor() {
        super(...arguments);
        this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getStatsBarData() {
        return rxjs_1.of(this.statsBarData);
    }
};
StatsBarService = __decorate([
    core_1.Injectable()
], StatsBarService);
exports.StatsBarService = StatsBarService;
