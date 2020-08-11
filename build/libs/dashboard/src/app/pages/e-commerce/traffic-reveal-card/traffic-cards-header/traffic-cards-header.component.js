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
exports.TrafficCardsHeaderComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
let TrafficCardsHeaderComponent = class TrafficCardsHeaderComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.alive = true;
        this.periodChange = new core_1.EventEmitter();
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }
    changePeriod(period) {
        this.type = period;
        this.periodChange.emit(period);
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TrafficCardsHeaderComponent.prototype, "periodChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TrafficCardsHeaderComponent.prototype, "type", void 0);
TrafficCardsHeaderComponent = __decorate([
    core_1.Component({
        selector: 'ngx-traffic-cards-header',
        styleUrls: ['./traffic-cards-header.component.scss'],
        templateUrl: './traffic-cards-header.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], TrafficCardsHeaderComponent);
exports.TrafficCardsHeaderComponent = TrafficCardsHeaderComponent;
