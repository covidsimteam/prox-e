import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatTableEditorComponent } from './mat-editor/mat-editor.component';
import { MatTableInputComponent } from './mat-input/mat-input.component';
import { MatTableRadioComponent } from './mat-radio/mat-radio.component';
import { MatTableSelectComponent } from './mat-select/mat-select.component';

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
    CommonModule
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
