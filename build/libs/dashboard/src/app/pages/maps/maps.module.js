"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapsModule = void 0;
const core_1 = require("@angular/core");
const ngx_leaflet_1 = require("@asymmetrik/ngx-leaflet");
const theme_1 = require("@nebular/theme");
const angular2_chartjs_1 = require("angular2-chartjs");
const ngx_echarts_1 = require("ngx-echarts");
const theme_module_1 = require("../../@theme/theme.module");
const public_api_1 = require("../../lib/leaflet-fullscreen/public-api");
const maps_routing_module_1 = require("./maps-routing.module");
let MapsModule = class MapsModule {
};
MapsModule = __decorate([
    core_1.NgModule({
        imports: [
            theme_module_1.ThemeModule,
            ngx_leaflet_1.LeafletModule,
            public_api_1.LeafletFullscreenModule,
            maps_routing_module_1.MapsRoutingModule,
            ngx_echarts_1.NgxEchartsModule,
            theme_1.NbCardModule,
            theme_1.NbSpinnerModule,
            angular2_chartjs_1.ChartModule
        ],
        exports: [],
        declarations: [
            ...maps_routing_module_1.routedComponents,
        ],
    })
], MapsModule);
exports.MapsModule = MapsModule;
