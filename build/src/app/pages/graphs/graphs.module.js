"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphsModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const graphs_routing_module_1 = require("./graphs-routing.module");
let GraphsModule = class GraphsModule {
};
GraphsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            theme_1.NbCardModule,
            graphs_routing_module_1.GraphsRoutingModule
        ],
        declarations: [...graphs_routing_module_1.routedComponents],
    })
], GraphsModule);
exports.GraphsModule = GraphsModule;
