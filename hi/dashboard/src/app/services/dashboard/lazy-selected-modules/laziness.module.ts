import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazinessConfigComponent } from './laziness-config/laziness-config.component';
import { CovFormsModule } from './forms-cov/cov-forms.module';
import { FormVizsModule } from './form-vizs/form-vizs.module';
import { FormFilesModule } from './form-files/form-files.module';
import { UixModule } from './form-uix/uix.module';

@NgModule({
  declarations: [LazinessConfigComponent],
  imports: [
    CommonModule,
    CovFormsModule,
    FormVizsModule,
    FormFilesModule,
    UixModule
  ]
})
export class LazinessModule { }
