import { NgModule } from '@angular/core';
import { FormsModule, FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  NbAccordionModule, NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
  NbUserModule
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from '../../@theme/theme.module';
import { FormAStepEightTwoComponent } from './form-a/form-a-step-eight-two/form-a-step-eight-two.component';
import { FormAStepFiveComponent } from './form-a/form-a-step-five/form-a-step-five.component';
import { FormAStepFourComponent } from './form-a/form-a-step-four/form-a-step-four.component';
import { FormAStepNineComponent } from './form-a/form-a-step-nine/form-a-step-nine.component';
import { FormAStepOComponent } from './form-a/form-a-step-o/form-a-step-o.component';
import { FormAStepOneAComponent } from './form-a/form-a-step-one-a/form-a-step-one-a.component';
import { FormAStepOneBComponent } from './form-a/form-a-step-one-b/form-a-step-one-b.component';
import { FormAStepOneComponent } from './form-a/form-a-step-one/form-a-step-one.component';
import { FormAStepSevenComponent } from './form-a/form-a-step-seven/form-a-step-seven.component';
import { FormAStepSixComponent } from './form-a/form-a-step-six/form-a-step-six.component';
import { FormAStepThreeComponent } from './form-a/form-a-step-three/form-a-step-three.component';
import { FormAStepTwoComponent } from './form-a/form-a-step-two/form-a-step-two.component';
import { FormAComponent } from './form-a/form-a.component';
import { FormB1Component } from './form-b1/form-b1.component';
import { FormB2Component } from './form-b2/form-b2.component';
import { FormHospitalComponent } from './form-hospital/form-hospital.component';
import { FormHrBreakComponent } from './form-hr-break/form-hr-break.component';
import { FormIsolationComponent } from './form-isolation/form-isolation.component';
import { FormMunicipalityComponent } from './form-municipality/form-municipality.component';
import { FormPCRComponent } from './form-pcr-lab/form-pcr.component';
import { FormPOEComponent } from './form-poe/form-poe.component';
import { FormQFComponent } from './form-quarantine-facility/form-qf.component';
import { FormRDTComponent } from './form-rdt-lab/form-rdt.component';
import { SchedulerComponent } from './form-schedule/scheduler.component';
import { PcrTestRecordComponent } from './form-sections/pcr-test-record/pcr-test-record.component';
import { RdtTestRecordComponent } from './form-sections/rdt-test-record/rdt-test-record.component';
import { ReturneeDetailsComponent } from './form-sections/returnee-details/returnee-details.component';
import { ReturneeLocationDetailsComponent } from './form-sections/returnee-location-details/returnee-location-details.component';
import { SymptomRecordComponent } from './form-sections/symptom-record/symptom-record.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';


const MaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
];

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbAccordionModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NbStepperModule,
    NbLayoutModule,

    TranslateModule.forChild({ extend: true }),
    ...MaterialModules,
  ],
  declarations: [
    FormsComponent,
    FormMunicipalityComponent,
    FormPOEComponent,
    FormQFComponent,
    FormRDTComponent,
    FormPCRComponent,
    FormIsolationComponent,
    FormHospitalComponent,
    ReturneeDetailsComponent,
    ReturneeLocationDetailsComponent,
    PcrTestRecordComponent,
    RdtTestRecordComponent,
    SymptomRecordComponent,
    FormAComponent,
    FormB1Component,
    FormB2Component,
    SchedulerComponent,
    FormAStepOComponent,
    FormAStepOneComponent,
    FormAStepOneAComponent,
    FormAStepOneBComponent,
    FormAStepTwoComponent,
    FormAStepThreeComponent,
    FormAStepFourComponent,
    FormHrBreakComponent,
    FormAStepFiveComponent,
    FormAStepSixComponent,
    FormAStepSevenComponent,
    FormAStepEightTwoComponent,
    FormAStepNineComponent
  ],
})
export class HealthFormsModule { }
