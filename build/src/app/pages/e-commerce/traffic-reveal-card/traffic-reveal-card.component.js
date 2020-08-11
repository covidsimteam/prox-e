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
exports.TrafficRevealCardComponent = void 0;
const core_1 = require("@angular/core");
const traffic_list_1 = require("../../../@core/data/traffic-list");
const traffic_bar_1 = require("../../../@core/data/traffic-bar");
const operators_1 = require("rxjs/operators");
let TrafficRevealCardComponent = class TrafficRevealCardComponent {
    constructor(trafficListService, trafficBarService) {
        this.trafficListService = trafficListService;
        this.trafficBarService = trafficBarService;
        this.alive = true;
        this.revealed = false;
        this.period = 'week';
        this.getTrafficFrontCardData(this.period);
        this.getTrafficBackCardData(this.period);
    }
    toggleView() {
        this.revealed = !this.revealed;
    }
    setPeriodAngGetData(value) {
        this.period = value;
        this.getTrafficFrontCardData(value);
        this.getTrafficBackCardData(value);
    }
    getTrafficBackCardData(period) {
        this.trafficBarService.getTrafficBarData(period)
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(trafficBarData => {
            this.trafficBarData = trafficBarData;
        });
    }
    getTrafficFrontCardData(period) {
        this.trafficListService.getTrafficListData(period)
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(trafficListData => {
            this.trafficListData = trafficListData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
TrafficRevealCardComponent = __decorate([
    core_1.Component({
        selector: 'ngx-traffic-reveal-card',
        styleUrls: ['./traffic-reveal-card.component.scss'],
        templateUrl: './traffic-reveal-card.component.html',
    }),
    __metadata("design:paramtypes", [traffic_list_1.TrafficListData,
        traffic_bar_1.TrafficBarData])
], TrafficRevealCardComponent);
exports.TrafficRevealCardComponent = TrafficRevealCardComponent;
