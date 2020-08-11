"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesModule = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const ng2_smart_table_1 = require("ng2-smart-table");
const theme_module_1 = require("../../@theme/theme.module");
const tables_routing_module_1 = require("./tables-routing.module");
const ngx_csv_parser_1 = require("ngx-csv-parser");
let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    core_1.NgModule({
        imports: [
            theme_1.NbCardModule,
            theme_1.NbTreeGridModule,
            theme_1.NbIconModule,
            theme_1.NbInputModule,
            theme_1.NbButtonModule,
            theme_1.NbActionsModule,
            theme_1.NbCheckboxModule,
            theme_1.NbRadioModule,
            theme_1.NbSelectModule,
            theme_module_1.ThemeModule,
            tables_routing_module_1.TablesRoutingModule,
            ng2_smart_table_1.Ng2SmartTableModule,
            ngx_csv_parser_1.NgxCsvParserModule,
        ],
        declarations: [
            ...tables_routing_module_1.routedComponents,
        ],
    })
], TablesModule);
exports.TablesModule = TablesModule;
