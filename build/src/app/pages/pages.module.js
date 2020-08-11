"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesModule = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const theme_module_1 = require("../@theme/theme.module");
const e_commerce_module_1 = require("./e-commerce/e-commerce.module");
const miscellaneous_module_1 = require("./miscellaneous/miscellaneous.module");
const pages_routing_module_1 = require("./pages-routing.module");
const pages_component_1 = require("./pages.component");
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    core_1.NgModule({
        imports: [
            pages_routing_module_1.PagesRoutingModule,
            theme_module_1.ThemeModule,
            theme_1.NbMenuModule,
            e_commerce_module_1.ECommerceModule,
            miscellaneous_module_1.MiscellaneousModule,
        ],
        declarations: [
            pages_component_1.PagesComponent,
        ],
    })
], PagesModule);
exports.PagesModule = PagesModule;
