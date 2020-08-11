"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsModule = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const theme_module_1 = require("../../@theme/theme.module");
const forms_routing_module_1 = require("./forms-routing.module");
const forms_component_1 = require("./forms.component");
const forms_1 = require("@angular/forms");
const form_municipality_component_1 = require("./form-municipality/form-municipality.component");
const form_poe_component_1 = require("./form-poe/form-poe.component");
const form_qf_component_1 = require("./form-quarantine-facility/form-qf.component");
const form_rdt_component_1 = require("./form-rdt-lab/form-rdt.component");
const form_pcr_component_1 = require("./form-pcr-lab/form-pcr.component");
const form_isolation_component_1 = require("./form-isolation/form-isolation.component");
const form_hospital_component_1 = require("./form-hospital/form-hospital.component");
const returnee_details_component_1 = require("./form-sections/returnee-details/returnee-details.component");
const returnee_location_details_component_1 = require("./form-sections/returnee-location-details/returnee-location-details.component");
const pcr_test_record_component_1 = require("./form-sections/pcr-test-record/pcr-test-record.component");
const rdt_test_record_component_1 = require("./form-sections/rdt-test-record/rdt-test-record.component");
const symptom_record_component_1 = require("./form-sections/symptom-record/symptom-record.component");
const form_a_component_1 = require("./form-a/form-a.component");
let FormsModule = class FormsModule {
};
FormsModule = __decorate([
    core_1.NgModule({
        imports: [
            theme_module_1.ThemeModule,
            theme_1.NbInputModule,
            theme_1.NbCardModule,
            theme_1.NbButtonModule,
            theme_1.NbActionsModule,
            theme_1.NbAccordionModule,
            theme_1.NbUserModule,
            theme_1.NbCheckboxModule,
            theme_1.NbRadioModule,
            theme_1.NbSelectModule,
            theme_1.NbDatepickerModule,
            forms_routing_module_1.FormsRoutingModule,
            theme_1.NbSelectModule,
            theme_1.NbIconModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
        ],
        declarations: [
            forms_component_1.FormsComponent,
            form_municipality_component_1.FormMunicipalityComponent,
            form_poe_component_1.FormPOEComponent,
            form_qf_component_1.FormQFComponent,
            form_rdt_component_1.FormRDTComponent,
            form_pcr_component_1.FormPCRComponent,
            form_isolation_component_1.FormIsolationComponent,
            form_hospital_component_1.FormHospitalComponent,
            returnee_details_component_1.ReturneeDetailsComponent,
            returnee_location_details_component_1.ReturneeLocationDetailsComponent,
            pcr_test_record_component_1.PcrTestRecordComponent,
            rdt_test_record_component_1.RdtTestRecordComponent,
            symptom_record_component_1.SymptomRecordComponent,
            form_a_component_1.FormAComponent,
        ],
    })
], FormsModule);
exports.FormsModule = FormsModule;
