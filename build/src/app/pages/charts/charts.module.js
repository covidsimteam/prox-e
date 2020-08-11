"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartsModule = void 0;
const core_1 = require("@angular/core");
const ngx_echarts_1 = require("ngx-echarts");
const ngx_charts_1 = require("@swimlane/ngx-charts");
const angular2_chartjs_1 = require("angular2-chartjs");
const theme_1 = require("@nebular/theme");
const theme_module_1 = require("../../@theme/theme.module");
const charts_routing_module_1 = require("./charts-routing.module");
const chartjs_bar_component_1 = require("./chartjs/chartjs-bar.component");
const chartjs_line_component_1 = require("./chartjs/chartjs-line.component");
const chartjs_pie_component_1 = require("./chartjs/chartjs-pie.component");
const chartjs_multiple_xaxis_component_1 = require("./chartjs/chartjs-multiple-xaxis.component");
const chartjs_bar_horizontal_component_1 = require("./chartjs/chartjs-bar-horizontal.component");
const chartjs_radar_component_1 = require("./chartjs/chartjs-radar.component");
const d3_bar_component_1 = require("./d3/d3-bar.component");
const d3_line_component_1 = require("./d3/d3-line.component");
const d3_pie_component_1 = require("./d3/d3-pie.component");
const d3_area_stack_component_1 = require("./d3/d3-area-stack.component");
const d3_polar_component_1 = require("./d3/d3-polar.component");
const d3_advanced_pie_component_1 = require("./d3/d3-advanced-pie.component");
const echarts_line_component_1 = require("./echarts/echarts-line.component");
const echarts_pie_component_1 = require("./echarts/echarts-pie.component");
const echarts_bar_component_1 = require("./echarts/echarts-bar.component");
const echarts_multiple_xaxis_component_1 = require("./echarts/echarts-multiple-xaxis.component");
const echarts_area_stack_component_1 = require("./echarts/echarts-area-stack.component");
const echarts_bar_animation_component_1 = require("./echarts/echarts-bar-animation.component");
const echarts_radar_component_1 = require("./echarts/echarts-radar.component");
const components = [
    chartjs_bar_component_1.ChartjsBarComponent,
    chartjs_line_component_1.ChartjsLineComponent,
    chartjs_pie_component_1.ChartjsPieComponent,
    chartjs_multiple_xaxis_component_1.ChartjsMultipleXaxisComponent,
    chartjs_bar_horizontal_component_1.ChartjsBarHorizontalComponent,
    chartjs_radar_component_1.ChartjsRadarComponent,
    d3_bar_component_1.D3BarComponent,
    d3_line_component_1.D3LineComponent,
    d3_pie_component_1.D3PieComponent,
    d3_area_stack_component_1.D3AreaStackComponent,
    d3_polar_component_1.D3PolarComponent,
    d3_advanced_pie_component_1.D3AdvancedPieComponent,
    echarts_line_component_1.EchartsLineComponent,
    echarts_pie_component_1.EchartsPieComponent,
    echarts_bar_component_1.EchartsBarComponent,
    echarts_multiple_xaxis_component_1.EchartsMultipleXaxisComponent,
    echarts_area_stack_component_1.EchartsAreaStackComponent,
    echarts_bar_animation_component_1.EchartsBarAnimationComponent,
    echarts_radar_component_1.EchartsRadarComponent,
];
let ChartsModule = class ChartsModule {
};
ChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            theme_module_1.ThemeModule,
            charts_routing_module_1.ChartsRoutingModule,
            ngx_echarts_1.NgxEchartsModule,
            ngx_charts_1.NgxChartsModule,
            angular2_chartjs_1.ChartModule,
            theme_1.NbCardModule,
        ],
        declarations: [...charts_routing_module_1.routedComponents, ...components],
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;
