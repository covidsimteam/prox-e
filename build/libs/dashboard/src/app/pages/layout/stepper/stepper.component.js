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
exports.StepperComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let StepperComponent = class StepperComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.firstForm = this.fb.group({
            firstCtrl: ['', forms_1.Validators.required],
        });
        this.secondForm = this.fb.group({
            secondCtrl: ['', forms_1.Validators.required],
        });
        this.thirdForm = this.fb.group({
            thirdCtrl: ['', forms_1.Validators.required],
        });
    }
    onFirstSubmit() {
        this.firstForm.markAsDirty();
    }
    onSecondSubmit() {
        this.secondForm.markAsDirty();
    }
    onThirdSubmit() {
        this.thirdForm.markAsDirty();
    }
};
StepperComponent = __decorate([
    core_1.Component({
        selector: 'ngx-stepper',
        templateUrl: 'stepper.component.html',
        styleUrls: ['stepper.component.scss'],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], StepperComponent);
exports.StepperComponent = StepperComponent;
