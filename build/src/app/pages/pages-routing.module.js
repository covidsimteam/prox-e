"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_guard_1 = require("../services/guards/auth.guard");
const e_commerce_component_1 = require("./e-commerce/e-commerce.component");
const not_found_component_1 = require("./miscellaneous/not-found/not-found.component");
const pages_component_1 = require("./pages.component");
const routes = [{
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            {
                path: 'home',
                component: e_commerce_component_1.ECommerceComponent,
            },
            {
                path: 'secured/forms',
                canActivate: [auth_guard_1.AuthGuard],
                loadChildren: () => Promise.resolve().then(() => __importStar(require('./forms/forms.module'))).then(m => m.FormsModule),
            },
            {
                path: 'secured/maps',
                canActivate: [auth_guard_1.AuthGuard],
                loadChildren: () => Promise.resolve().then(() => __importStar(require('./maps/maps.module'))).then(m => m.MapsModule),
            },
            {
                path: 'charts',
                loadChildren: () => Promise.resolve().then(() => __importStar(require('./charts/charts.module'))).then(m => m.ChartsModule),
            },
            {
                path: 'graphs',
                loadChildren: () => Promise.resolve().then(() => __importStar(require('./graphs/graphs.module'))).then(m => m.GraphsModule),
            },
            {
                path: 'secured/tables',
                canActivate: [auth_guard_1.AuthGuard],
                loadChildren: () => Promise.resolve().then(() => __importStar(require('./tables/tables.module'))).then(m => m.TablesModule),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: not_found_component_1.NotFoundComponent,
            },
        ],
    }];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], PagesRoutingModule);
exports.PagesRoutingModule = PagesRoutingModule;
