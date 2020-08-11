"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routedComponents = exports.MapsRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const maps_component_1 = require("./maps.component");
const nation_component_1 = require("./nation/nation.component");
const bubble_map_component_1 = require("./bubble/bubble-map.component");
const region_component_1 = require("./region/region.component");
const district_ranking_bar_component_1 = require("./nation/district-ranking-bar.component");
const routes = [{
        path: '',
        component: maps_component_1.MapsComponent,
        children: [
            {
                path: 'area/:name',
                component: region_component_1.RegionComponent,
            },
            {
                path: 'area/:name/:type',
                component: region_component_1.RegionComponent,
            },
            {
                path: 'nepal',
                component: nation_component_1.NationComponent,
            },
            {
                path: 'bubble',
                component: bubble_map_component_1.BubbleMapComponent,
            },
        ],
    }];
let MapsRoutingModule = class MapsRoutingModule {
};
MapsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], MapsRoutingModule);
exports.MapsRoutingModule = MapsRoutingModule;
exports.routedComponents = [
    maps_component_1.MapsComponent,
    nation_component_1.NationComponent,
    bubble_map_component_1.BubbleMapComponent,
    region_component_1.RegionComponent,
    district_ranking_bar_component_1.DistrictRankingComponent
];
