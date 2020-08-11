"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ThemeModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const theme_1 = require("@nebular/theme");
const eva_icons_1 = require("@nebular/eva-icons");
const components_1 = require("./components");
const pipes_1 = require("./pipes");
const layouts_1 = require("./layouts");
const theme_default_1 = require("./styles/theme.default");
const theme_cosmic_1 = require("./styles/theme.cosmic");
const theme_corporate_1 = require("./styles/theme.corporate");
const theme_dark_1 = require("./styles/theme.dark");
const NB_MODULES = [
    theme_1.NbLayoutModule,
    theme_1.NbMenuModule,
    theme_1.NbUserModule,
    theme_1.NbActionsModule,
    theme_1.NbSearchModule,
    theme_1.NbSidebarModule,
    theme_1.NbContextMenuModule,
    theme_1.NbButtonModule,
    theme_1.NbSelectModule,
    theme_1.NbIconModule,
    eva_icons_1.NbEvaIconsModule,
    theme_1.NbToggleModule,
    theme_1.NbPopoverModule,
];
const COMPONENTS = [
    components_1.HeaderComponent,
    components_1.FooterComponent,
    components_1.SearchInputComponent,
    components_1.TinyMCEComponent,
    layouts_1.OneColumnLayoutComponent,
    layouts_1.ThreeColumnsLayoutComponent,
    layouts_1.TwoColumnsLayoutComponent,
];
const PIPES = [
    pipes_1.CapitalizePipe,
    pipes_1.PluralPipe,
    pipes_1.RoundPipe,
    pipes_1.TimingPipe,
    pipes_1.NumberWithCommasPipe,
];
let ThemeModule = ThemeModule_1 = class ThemeModule {
    static forRoot() {
        return {
            ngModule: ThemeModule_1,
            providers: [
                ...theme_1.NbThemeModule.forRoot({
                    name: 'default',
                }, [theme_default_1.DEFAULT_THEME, theme_cosmic_1.COSMIC_THEME, theme_corporate_1.CORPORATE_THEME, theme_dark_1.DARK_THEME]).providers,
            ],
        };
    }
};
ThemeModule = ThemeModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, ...NB_MODULES],
        exports: [common_1.CommonModule, ...PIPES, ...COMPONENTS],
        declarations: [...COMPONENTS, ...PIPES],
    })
], ThemeModule);
exports.ThemeModule = ThemeModule;
