"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routedComponents = exports.GraphsRoutingModule = void 0;
const router_1 = require("@angular/router");
const graphs_component_1 = require("./graphs.component");
const concepts_component_1 = require("./concepts/concepts.component");
const servers_component_1 = require("./servers/servers.component");
const core_1 = require("@angular/core");
const routes = [
    {
        path: '',
        component: graphs_component_1.GraphsComponent,
        children: [
            {
                path: 'concepts',
                component: concepts_component_1.ConceptsComponent,
            },
            {
                path: 'servers',
                component: servers_component_1.ServersComponent,
            }
        ],
    }
];
let GraphsRoutingModule = class GraphsRoutingModule {
};
GraphsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], GraphsRoutingModule);
exports.GraphsRoutingModule = GraphsRoutingModule;
exports.routedComponents = [
    graphs_component_1.GraphsComponent,
    concepts_component_1.ConceptsComponent,
    servers_component_1.ServersComponent,
];
