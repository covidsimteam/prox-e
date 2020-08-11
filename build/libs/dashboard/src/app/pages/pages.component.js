"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesComponent = void 0;
const core_1 = require("@angular/core");
const pages_menu_1 = require("./pages-menu");
let PagesComponent = class PagesComponent {
    constructor() {
        this.menu = pages_menu_1.MENU_ITEMS;
    }
};
PagesComponent = __decorate([
    core_1.Component({
        selector: 'ngx-pages',
        styleUrls: ['pages.component.scss'],
        template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
    })
], PagesComponent);
exports.PagesComponent = PagesComponent;
