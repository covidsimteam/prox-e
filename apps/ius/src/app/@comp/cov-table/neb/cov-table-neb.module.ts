import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebTableCheckboxComponent } from './neb-checkbox/neb-checkbox.component';
import { NebTableEditorComponent } from './neb-editor/neb-editor.component';
import { NebTableInputComponent } from './neb-input/neb-input.component';
import { NebTableRadioComponent } from './neb-radio/neb-radio.component';
import { NebTableSelectComponent } from './neb-select/neb-select.component';

const COMPS = [
  NebTableCheckboxComponent,
  NebTableEditorComponent,
  NebTableInputComponent,
  NebTableRadioComponent,
  NebTableSelectComponent,
];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule
  ],
  exports: [ ...COMPS]
})
export class CovTableNebModule { }
