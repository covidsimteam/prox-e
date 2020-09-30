import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebFormCheckboxComponent } from './neb-checkbox/neb-checkbox.component';
import { NebFormEditorComponent } from './neb-editor/neb-editor.component';
import { NebFormInputComponent } from './neb-input/neb-input.component';
import { NebFormRadioComponent } from './neb-radio/neb-radio.component';
import { NebFormSelectComponent } from './neb-select/neb-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgGridModule } from 'ag-grid-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    NebFormCheckboxComponent,
    NebFormEditorComponent,
    NebFormInputComponent,
    NebFormRadioComponent,
    NebFormSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AgGridModule,
  ],
  exports: [
    NebFormCheckboxComponent,
    NebFormEditorComponent,
    NebFormInputComponent,
    NebFormRadioComponent,
    NebFormSelectComponent
  ]
})
export class CovFormNebModule { }
