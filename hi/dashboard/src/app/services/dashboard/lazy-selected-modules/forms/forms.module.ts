import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormVizsModule } from '../form-vizs/form-vizs.module';
import { FormFilesModule } from '../form-files/form-files.module';
import { FormComponent } from './form/form.component';
import { UixModule } from '../form-uix/uix.module';
import { FilesModule } from '../form-files/files/files.module';
import { FormFfwdComponent } from './form-ffwd/form-ffwd.component';

@NgModule({
  declarations: [FormComponent, FormFfwdComponent],
  imports: [
    CommonModule,
    FormVizsModule,
    FormFilesModule,
    FilesModule,
    FormVizsModule,
    UixModule
  ]
})
export class CovFormsModule { }
