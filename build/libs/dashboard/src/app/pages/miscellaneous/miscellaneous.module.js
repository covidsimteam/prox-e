"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscellaneousModule = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const theme_module_1 = require("../../@theme/theme.module");
const miscellaneous_routing_module_1 = require("./miscellaneous-routing.module");
const miscellaneous_component_1 = require("./miscellaneous.component");
const not_found_component_1 = require("./not-found/not-found.component");
let MiscellaneousModule = class MiscellaneousModule {
};
MiscellaneousModule = __decorate([
    core_1.NgModule({
        imports: [
            theme_module_1.ThemeModule,
            theme_1.NbCardModule,
            theme_1.NbButtonModule,
            miscellaneous_routing_module_1.MiscellaneousRoutingModule,
        ],
        declarations: [
            miscellaneous_component_1.MiscellaneousComponent,
            not_found_component_1.NotFoundComponent,
        ],
    })
], MiscellaneousModule);
exports.MiscellaneousModule = MiscellaneousModule;
