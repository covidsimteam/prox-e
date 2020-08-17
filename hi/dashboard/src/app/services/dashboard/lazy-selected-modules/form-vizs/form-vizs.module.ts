import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagsComponent } from './datags/datags.component';

@NgModule({
  declarations: [DatagsComponent],
  exports: [DatagsComponent],
  imports: [
    CommonModule
  ]
})
export class FormVizsModule { }
