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
exports.TrafficFrontCardComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
let TrafficFrontCardComponent = class TrafficFrontCardComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }
    trackByDate(_, item) {
        return item.date;
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TrafficFrontCardComponent.prototype, "frontCardData", void 0);
TrafficFrontCardComponent = __decorate([
    core_1.Component({
        selector: 'ngx-traffic-front-card',
        styleUrls: ['./traffic-front-card.component.scss'],
        templateUrl: './traffic-front-card.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], TrafficFrontCardComponent);
exports.TrafficFrontCardComponent = TrafficFrontCardComponent;
