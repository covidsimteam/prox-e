"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutModule = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const theme_1 = require("@nebular/theme");
const theme_module_1 = require("../../@theme/theme.module");
const layout_routing_module_1 = require("./layout-routing.module");
const layout_component_1 = require("./layout.component");
const tabs_component_1 = require("./tabs/tabs.component");
const stepper_component_1 = require("./stepper/stepper.component");
const list_component_1 = require("./list/list.component");
const infinite_list_component_1 = require("./infinite-list/infinite-list.component");
const news_post_component_1 = require("./infinite-list/news-post/news-post.component");
const news_post_placeholder_component_1 = require("./infinite-list/news-post-placeholder/news-post-placeholder.component");
const accordion_component_1 = require("./accordion/accordion.component");
const news_service_1 = require("./news.service");
let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            theme_module_1.ThemeModule,
            theme_1.NbTabsetModule,
            theme_1.NbRouteTabsetModule,
            theme_1.NbStepperModule,
            theme_1.NbCardModule,
            theme_1.NbButtonModule,
            theme_1.NbListModule,
            theme_1.NbAccordionModule,
            theme_1.NbUserModule,
            layout_routing_module_1.LayoutRoutingModule,
        ],
        declarations: [
            layout_component_1.LayoutComponent,
            tabs_component_1.TabsComponent,
            tabs_component_1.Tab1Component,
            tabs_component_1.Tab2Component,
            stepper_component_1.StepperComponent,
            list_component_1.ListComponent,
            news_post_placeholder_component_1.NewsPostPlaceholderComponent,
            infinite_list_component_1.InfiniteListComponent,
            news_post_component_1.NewsPostComponent,
            accordion_component_1.AccordionComponent,
        ],
        providers: [
            news_service_1.NewsService,
        ],
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
