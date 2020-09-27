import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatFormEditorComponent } from './mat-editor/mat-editor.component';
import { MatFormInputComponent } from './mat-input/mat-input.component';
import { MatFormRadioComponent } from './mat-radio/mat-radio.component';
import { MatFormSelectComponent } from './mat-select/mat-select.component';

const COMPS = [
  MatFormCheckboxComponent,
  MatFormEditorComponent,
  MatFormInputComponent,
  MatFormRadioComponent,
  MatFormSelectComponent,
];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule
  ],
  exports: [ ...COMPS]
})
export class CovFormMatModule { }
