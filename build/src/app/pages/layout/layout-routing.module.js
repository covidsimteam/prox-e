"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const layout_component_1 = require("./layout.component");
const tabs_component_1 = require("./tabs/tabs.component");
const accordion_component_1 = require("./accordion/accordion.component");
const infinite_list_component_1 = require("./infinite-list/infinite-list.component");
const list_component_1 = require("./list/list.component");
const stepper_component_1 = require("./stepper/stepper.component");
const routes = [{
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            {
                path: 'stepper',
                component: stepper_component_1.StepperComponent,
            },
            {
                path: 'list',
                component: list_component_1.ListComponent,
            },
            {
                path: 'infinite-list',
                component: infinite_list_component_1.InfiniteListComponent,
            },
            {
                path: 'accordion',
                component: accordion_component_1.AccordionComponent,
            },
            {
                path: 'tabs',
                component: tabs_component_1.TabsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full',
                    },
                    {
                        path: 'tab1',
                        component: tabs_component_1.Tab1Component,
                    },
                    {
                        path: 'tab2',
                        component: tabs_component_1.Tab2Component,
                    },
                ],
            },
        ],
    }];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;
