import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFilesComponent } from './form-files/form-files.component';

@NgModule({
  declarations: [FormFilesComponent],
  exports: [FormFilesComponent],
  imports: [
    CommonModule
  ]
})
export class FormFilesModule { }
