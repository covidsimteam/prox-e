import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebFormCheckboxComponent } from './neb-checkbox/neb-checkbox.component';
import { NebFormEditorComponent } from './neb-editor/neb-editor.component';
import { NebFormInputComponent } from './neb-input/neb-input.component';
import { NebFormRadioComponent } from './neb-radio/neb-radio.component';
import { NebFormSelectComponent } from './neb-select/neb-select.component';

const COMPS = [
  NebFormCheckboxComponent,
  NebFormEditorComponent,
  NebFormInputComponent,
  NebFormRadioComponent,
  NebFormSelectComponent,
];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule
  ],
  exports: [ ...COMPS]
})
export class CovFormNebModule { }
