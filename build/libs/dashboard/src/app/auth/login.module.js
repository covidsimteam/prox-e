"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const theme_1 = require("@nebular/theme");
const login_component_1 = require("./login.component");
const forms_1 = require("@angular/forms");
const login_routing_module_1 = require("./login-routing.module");
const auth_1 = require("@nebular/auth");
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    core_1.NgModule({
        declarations: [login_component_1.LoginComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbAlertModule,
            theme_1.NbIconModule,
            theme_1.NbInputModule,
            login_routing_module_1.LoginRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            theme_1.NbButtonModule,
            theme_1.NbCardModule,
            theme_1.NbAlertModule,
            theme_1.NbLayoutModule,
            auth_1.NbAuthModule
        ],
    })
], LoginModule);
exports.LoginModule = LoginModule;
