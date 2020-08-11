"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterComponent = void 0;
const core_1 = require("@angular/core");
let FooterComponent = class FooterComponent {
};
FooterComponent = __decorate([
    core_1.Component({
        selector: 'ngx-footer',
        styleUrls: ['./footer.component.scss'],
        template: `
    <span class="created-by">
      Created with ♥ for
      <b><a href="https://covidsim.team/about-us" target="_blank">covidsim.team</a></b>
      by <a href="https://risav.dev/introducing-nepwork-ck5294zz401bvmus1p2oskup0">Risav Karna</a>
    </span>
    <div class="socials">
      <a href="https://github.com/covidsimteam" target="_blank" class="ion ion-social-github"></a>-
    </div>
  `,
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
