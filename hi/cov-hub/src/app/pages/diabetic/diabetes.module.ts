import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiabetesMgmtComponent } from './diabetes-mgmt/diabetes-mgmt.component';
import { DiabetesInputPipe } from './diabetes-input.pipe';
import { DiabetesEntryDirective } from './diabetes-entry.directive';



@NgModule({
  declarations: [DiabetesMgmtComponent, DiabetesInputPipe, DiabetesEntryDirective],
  imports: [
    CommonModule
  ]
})
export class DiabetesModule { }
