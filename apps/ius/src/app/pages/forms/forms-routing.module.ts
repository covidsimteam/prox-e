import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAComponent } from './form-a/form-a.component';
import { FormHospitalComponent } from './form-hospital/form-hospital.component';
import { FormIsolationComponent } from './form-isolation/form-isolation.component';
import { FormMunicipalityComponent } from './form-municipality/form-municipality.component';
import { FormPCRComponent } from './form-pcr-lab/form-pcr.component';
import { FormPOEComponent } from './form-poe/form-poe.component';
import { FormQFComponent } from './form-quarantine-facility/form-qf.component';
import { FormRDTComponent } from './form-rdt-lab/form-rdt.component';
import { FormsComponent } from './forms.component';
import { FormB1Component } from './form-b1/form-b1.component';
import { FormB2Component } from './form-b2/form-b2.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'point-of-entry',
        component: FormPOEComponent,
      },
      {
        path: 'form-a',
        component: FormAComponent,
      },
      {
        path: 'form-b1',
        component: FormB1Component,
      },
      {
        path: 'form-b2',
        component: FormB2Component,
      },
      {
        path: 'quarantine-facility',
        component: FormQFComponent,
      },
      {
        path: 'rdt-lab',
        component: FormRDTComponent,
      },
      {
        path: 'pcr-lab',
        component: FormPCRComponent,
      },
      {
        path: 'isolation',
        component: FormIsolationComponent,
      },
      {
        path: 'hospital',
        component: FormHospitalComponent,
      },
      {
        path: 'municipality',
        component: FormMunicipalityComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

