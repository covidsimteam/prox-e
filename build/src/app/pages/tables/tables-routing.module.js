"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routedComponents = exports.TablesRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const pcr_component_1 = require("./pcr/pcr.component");
const rdt_component_1 = require("./rdt/rdt.component");
const returnee_component_1 = require("./returnee/returnee.component");
const tables_component_1 = require("./tables.component");
const tree_grid_component_1 = require("./tree-grid/tree-grid.component");
const routes = [{
        path: '',
        component: tables_component_1.TablesComponent,
        children: [
            {
                path: 'returnee',
                component: returnee_component_1.ReturneeComponent,
            },
            {
                path: 'pcr',
                component: pcr_component_1.PcrComponent,
            },
            {
                path: 'rdt',
                component: rdt_component_1.RdtComponent,
            },
            {
                path: 'tree-grid',
                component: tree_grid_component_1.TreeGridComponent,
            },
        ],
    }];
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], TablesRoutingModule);
exports.TablesRoutingModule = TablesRoutingModule;
exports.routedComponents = [
    tree_grid_component_1.FsIconComponent,
    returnee_component_1.ReturneeComponent,
    pcr_component_1.PcrComponent,
    tables_component_1.TablesComponent,
    rdt_component_1.RdtComponent,
    tree_grid_component_1.TreeGridComponent,
];
