"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const forms_component_1 = require("./forms.component");
const form_municipality_component_1 = require("./form-municipality/form-municipality.component");
const form_poe_component_1 = require("./form-poe/form-poe.component");
const form_qf_component_1 = require("./form-quarantine-facility/form-qf.component");
const form_rdt_component_1 = require("./form-rdt-lab/form-rdt.component");
const form_pcr_component_1 = require("./form-pcr-lab/form-pcr.component");
const form_isolation_component_1 = require("./form-isolation/form-isolation.component");
const form_hospital_component_1 = require("./form-hospital/form-hospital.component");
const form_a_component_1 = require("./form-a/form-a.component");
const routes = [
    {
        path: '',
        component: forms_component_1.FormsComponent,
        children: [
            {
                path: 'point-of-entry',
                component: form_poe_component_1.FormPOEComponent,
            },
            {
                path: 'form-a',
                // canActivate: [AdminGuard],
                component: form_a_component_1.FormAComponent,
            },
            {
                path: 'quarantine-facility',
                component: form_qf_component_1.FormQFComponent,
            },
            {
                path: 'rdt-lab',
                component: form_rdt_component_1.FormRDTComponent,
            },
            {
                path: 'pcr-lab',
                component: form_pcr_component_1.FormPCRComponent,
            },
            {
                path: 'isolation',
                component: form_isolation_component_1.FormIsolationComponent,
            },
            {
                path: 'hospital',
                component: form_hospital_component_1.FormHospitalComponent,
            },
            {
                path: 'municipality',
                component: form_municipality_component_1.FormMunicipalityComponent,
            },
        ],
    },
];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes),
        ],
        exports: [
            router_1.RouterModule,
        ],
    })
], FormsRoutingModule);
exports.FormsRoutingModule = FormsRoutingModule;
