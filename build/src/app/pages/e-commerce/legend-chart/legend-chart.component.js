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
exports.ECommerceLegendChartComponent = void 0;
const core_1 = require("@angular/core");
let ECommerceLegendChartComponent = class ECommerceLegendChartComponent {
    constructor() {
        /**
         * Take an array of legend items
         * Available iconColor: 'green', 'purple', 'light-purple', 'blue', 'yellow'
         * @type {{iconColor: string; title: string}[]}
         */
        this.legendItems = [];
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ECommerceLegendChartComponent.prototype, "legendItems", void 0);
ECommerceLegendChartComponent = __decorate([
    core_1.Component({
        selector: 'ngx-legend-chart',
        styleUrls: ['./legend-chart.component.scss'],
        templateUrl: './legend-chart.component.html',
    })
], ECommerceLegendChartComponent);
exports.ECommerceLegendChartComponent = ECommerceLegendChartComponent;
