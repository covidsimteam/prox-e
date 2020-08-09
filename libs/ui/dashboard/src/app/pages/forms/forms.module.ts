import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbAccordionModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormMunicipalityComponent } from './form-municipality/form-municipality.component';
import { FormPOEComponent } from './form-poe/form-poe.component';
import { FormQFComponent } from './form-quarantine-facility/form-qf.component';
import { FormRDTComponent } from './form-rdt-lab/form-rdt.component';
import { FormPCRComponent } from './form-pcr-lab/form-pcr.component';
import { FormIsolationComponent } from './form-isolation/form-isolation.component';
import { FormHospitalComponent } from './form-hospital/form-hospital.component';
import { ReturneeDetailsComponent } from './form-sections/returnee-details/returnee-details.component';
import {
  ReturneeLocationDetailsComponent
} from './form-sections/returnee-location-details/returnee-location-details.component';
import { PcrTestRecordComponent } from './form-sections/pcr-test-record/pcr-test-record.component';
import { RdtTestRecordComponent } from './form-sections/rdt-test-record/rdt-test-record.component';
import { SymptomRecordComponent } from './form-sections/symptom-record/symptom-record.component';
import { FormAComponent } from './form-a/form-a.component';

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
    ReactiveFormsModule,
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
  ],
})
export class FormsModule {}
