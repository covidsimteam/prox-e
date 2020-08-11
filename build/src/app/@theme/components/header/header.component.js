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
exports.HeaderComponent = void 0;
const core_1 = require("@angular/core");
const auth_1 = require("@nebular/auth");
const theme_1 = require("@nebular/theme");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const utils_1 = require("../../../@core/utils");
let HeaderComponent = class HeaderComponent {
    constructor(sidebarService, menuService, themeService, layoutService, authService, breakpointService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.layoutService = layoutService;
        this.authService = authService;
        this.breakpointService = breakpointService;
        this.destroy$ = new rxjs_1.Subject();
        this.userPictureOnly = false;
        this.isPrivilegedUser = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
                icon: 'bulb-outline',
            },
            {
                value: 'dark',
                name: 'Dark',
                icon: 'moon-outline',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
        this.authService.onTokenChange()
            .subscribe((token) => {
            if (token.isValid()) {
                this.user = token.getPayload();
            }
        });
    }
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(operators_1.map(([, currentBreakpoint]) => currentBreakpoint.width < xl), operators_1.takeUntil(this.destroy$))
            .subscribe((isLessThanXl) => this.userPictureOnly = isLessThanXl);
        this.themeService.onThemeChange()
            .pipe(operators_1.map(({ name }) => name), operators_1.takeUntil(this.destroy$))
            .subscribe(themeName => this.currentTheme = themeName);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    logout() {
        this.authService.logout('email');
    }
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'ngx-header',
        styleUrls: ['./header.component.scss'],
        templateUrl: './header.component.html',
    }),
    __metadata("design:paramtypes", [theme_1.NbSidebarService,
        theme_1.NbMenuService,
        theme_1.NbThemeService,
        utils_1.LayoutService,
        auth_1.NbAuthService,
        theme_1.NbMediaBreakpointsService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
