import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatTableEditorComponent } from './mat-editor/mat-editor.component';
import { MatTableInputComponent } from './mat-input/mat-input.component';
import { MatTableRadioComponent } from './mat-radio/mat-radio.component';
import { MatTableSelectComponent } from './mat-select/mat-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';

const COMPS = [
  MatTableCheckboxComponent,
  MatTableEditorComponent,
  MatTableInputComponent,
  MatTableRadioComponent,
  MatTableSelectComponent,
];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    AgGridModule
  ],
  exports: [ ...COMPS]
})
export class CovTableMatModule {
  static forRoot(): ModuleWithProviders<CovTableMatModule> {
    return {
     ngModule: CovTableMatModule
   };
 }
}
