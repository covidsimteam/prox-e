import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazinessConfigComponent } from './laziness-config/laziness-config.component';
import { DatagsComponent } from './datags/datags.component';
import { FormFilesComponent } from './form-files/form-files.component';
import { SpecDocComponent } from './form-spec-doc/spec-doc.component';
import { CovFormComponent } from './forms-cov/form.component';
import { CovFormFfwdComponent } from './form-ffwd/form-ffwd.component';

@NgModule({
  declarations: [
    LazinessConfigComponent,
    DatagsComponent,
    FormFilesComponent,
    SpecDocComponent,
    CovFormComponent,
    CovFormFfwdComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LazinessModule { }
