"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsComponent = exports.Tab2Component = exports.Tab1Component = void 0;
const core_1 = require("@angular/core");
let Tab1Component = class Tab1Component {
};
Tab1Component = __decorate([
    core_1.Component({
        selector: 'ngx-tab1',
        template: `
    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered
      <a target="_blank" href="https://en.wikipedia.org/wiki/Home_appliances">home appliances</a>
      became viable in the 1900s with the introduction of
      <a target="_blank" href="https://en.wikipedia.org/wiki/Electric_power_distribution">electric power distribution
      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,
      dishwashers, and clothes dryers.
    </p>
  `,
    })
], Tab1Component);
exports.Tab1Component = Tab1Component;
let Tab2Component = class Tab2Component {
};
Tab2Component = __decorate([
    core_1.Component({
        selector: 'ngx-tab2',
        template: `
    <p>Tab 2 works!</p>
  `,
    })
], Tab2Component);
exports.Tab2Component = Tab2Component;
let TabsComponent = class TabsComponent {
    constructor() {
        this.tabs = [
            {
                title: 'Route tab #1',
                route: '/pages/layout/tabs/tab1',
            },
            {
                title: 'Route tab #2',
                route: '/pages/layout/tabs/tab2',
            },
        ];
    }
};
TabsComponent = __decorate([
    core_1.Component({
        selector: 'ngx-tabs',
        styleUrls: ['./tabs.component.scss'],
        templateUrl: './tabs.component.html',
    })
], TabsComponent);
exports.TabsComponent = TabsComponent;
