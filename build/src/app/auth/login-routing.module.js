"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoutingModule = void 0;
const router_1 = require("@angular/router");
const login_component_1 = require("./login.component");
const core_1 = require("@angular/core");
const not_found_component_1 = require("../pages/miscellaneous/not-found/not-found.component");
const auth_1 = require("@nebular/auth");
const routes = [{
        path: '',
        component: auth_1.NbAuthComponent,
        children: [
            {
                path: 'login',
                component: login_component_1.LoginComponent,
            },
        ],
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent,
    },
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], LoginRoutingModule);
exports.LoginRoutingModule = LoginRoutingModule;
