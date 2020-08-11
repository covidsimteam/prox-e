"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionComponent = void 0;
const core_1 = require("@angular/core");
let AccordionComponent = class AccordionComponent {
    toggle() {
        this.accordion.toggle();
    }
};
__decorate([
    core_1.ViewChild('item', { static: true }),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "accordion", void 0);
AccordionComponent = __decorate([
    core_1.Component({
        selector: 'ngx-accordion',
        templateUrl: 'accordion.component.html',
        styleUrls: ['accordion.component.scss'],
    })
], AccordionComponent);
exports.AccordionComponent = AccordionComponent;
