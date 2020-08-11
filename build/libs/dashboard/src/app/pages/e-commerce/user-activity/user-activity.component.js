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
exports.ECommerceUserActivityComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const operators_1 = require("rxjs/operators");
const user_activity_1 = require("../../../@core/data/user-activity");
let ECommerceUserActivityComponent = class ECommerceUserActivityComponent {
    constructor(themeService, userActivityService) {
        this.themeService = themeService;
        this.userActivityService = userActivityService;
        this.alive = true;
        this.userActivity = [];
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
        this.getUserActivity(this.type);
    }
    getUserActivity(period) {
        this.userActivityService.getUserActivityData(period)
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(userActivityData => {
            this.userActivity = userActivityData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
ECommerceUserActivityComponent = __decorate([
    core_1.Component({
        selector: 'ngx-user-activity',
        styleUrls: ['./user-activity.component.scss'],
        templateUrl: './user-activity.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService,
        user_activity_1.UserActivityData])
], ECommerceUserActivityComponent);
exports.ECommerceUserActivityComponent = ECommerceUserActivityComponent;
