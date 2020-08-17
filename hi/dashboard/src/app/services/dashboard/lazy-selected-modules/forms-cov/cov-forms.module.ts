import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormVizsModule } from '../form-vizs/form-vizs.module';
import { FormFilesModule } from '../form-files/form-files.module';
import { FormComponent } from './form/form.component';
import { UixModule } from '../form-uix/uix.module';
import { FormFfwdComponent } from './form-ffwd/form-ffwd.component';

@NgModule({
  declarations: [FormComponent, FormFfwdComponent],
  exports: [FormComponent, FormFfwdComponent],
  imports: [
    CommonModule,
    FormVizsModule,
    FormFilesModule,
    FormVizsModule,
    UixModule
  ]
})
export class CovFormsModule { }
