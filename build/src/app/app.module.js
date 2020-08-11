"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const ngx_echarts_1 = require("ngx-echarts");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const theme_1 = require("@nebular/theme");
const environment_1 = require("../environments/environment");
const core_module_1 = require("./@core/core.module");
const theme_module_1 = require("./@theme/theme.module");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const login_module_1 = require("./auth/login.module");
const service_worker_1 = require("@angular/service-worker");
const auth_1 = require("@nebular/auth");
const formSetting = {
    redirectDelay: 0,
    showMessages: {
        success: true,
    },
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
            app_routing_module_1.AppRoutingModule,
            theme_1.NbSidebarModule.forRoot(),
            theme_1.NbMenuModule.forRoot(),
            theme_1.NbDatepickerModule.forRoot(),
            theme_1.NbDialogModule.forRoot(),
            theme_1.NbWindowModule.forRoot(),
            theme_1.NbToastrModule.forRoot(),
            core_module_1.CoreModule.forRoot(),
            theme_module_1.ThemeModule.forRoot(),
            forms_1.ReactiveFormsModule,
            login_module_1.LoginModule,
            ngx_echarts_1.NgxEchartsModule,
            auth_1.NbAuthModule.forRoot({
                strategies: [
                    auth_1.NbPasswordAuthStrategy.setup({
                        name: 'username',
                        baseEndpoint: '',
                        login: {
                            endpoint: '/auth/sign-in',
                            method: 'post',
                        },
                        register: {
                            endpoint: '/auth/sign-up',
                            method: 'post',
                        },
                        logout: {
                            endpoint: '/auth/sign-out',
                            method: 'post',
                        },
                        requestPass: {
                            endpoint: '/auth/request-pass',
                            method: 'post',
                        },
                        resetPass: {
                            endpoint: '/auth/reset-pass',
                            method: 'post',
                        },
                    })
                ],
                forms: {
                    login: formSetting,
                    register: formSetting,
                    requestPassword: formSetting,
                    resetPassword: formSetting,
                    logout: {
                        redirectDelay: 0,
                    },
                },
            }),
            service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: environment_1.AppConf, useValue: environment_1.appConf }],
    })
], AppModule);
exports.AppModule = AppModule;
