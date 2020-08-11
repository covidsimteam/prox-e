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
exports.ChartPanelSummaryComponent = void 0;
const core_1 = require("@angular/core");
let ChartPanelSummaryComponent = class ChartPanelSummaryComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ChartPanelSummaryComponent.prototype, "summary", void 0);
ChartPanelSummaryComponent = __decorate([
    core_1.Component({
        selector: 'ngx-chart-panel-summary',
        styleUrls: ['./chart-panel-summary.component.scss'],
        template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
    </div>
  `,
    })
], ChartPanelSummaryComponent);
exports.ChartPanelSummaryComponent = ChartPanelSummaryComponent;
