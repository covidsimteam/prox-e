"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymptomRecordComponent = void 0;
const core_1 = require("@angular/core");
const forms_model_1 = require("../../../../models/forms.model");
let SymptomRecordComponent = class SymptomRecordComponent {
    constructor() {
        this.symptomRecords = [];
    }
    addSymptomRecord(_) {
        this.symptomRecords = [...this.symptomRecords, new forms_model_1.SymptomRecord()];
    }
};
SymptomRecordComponent = __decorate([
    core_1.Component({
        selector: 'ngx-symptom-record',
        templateUrl: './symptom-record.component.html',
        styleUrls: ['./symptom-record.component.scss']
    })
], SymptomRecordComponent);
exports.SymptomRecordComponent = SymptomRecordComponent;
