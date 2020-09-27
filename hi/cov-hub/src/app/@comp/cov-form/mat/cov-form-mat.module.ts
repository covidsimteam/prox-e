import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatFormEditorComponent } from './mat-editor/mat-editor.component';
import { MatFormInputComponent } from './mat-input/mat-input.component';
import { MatFormRadioComponent } from './mat-radio/mat-radio.component';
import { MatFormSelectComponent } from './mat-select/mat-select.component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgGridModule } from 'ag-grid-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

const COMPS = [

];

@NgModule({
  declarations: [
    MatFormCheckboxComponent,
    MatFormEditorComponent,
    MatFormInputComponent,
    MatFormRadioComponent,
    MatFormSelectComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AgGridModule,
    MatCheckboxModule
  ],
  exports: [
    MatFormCheckboxComponent,
    MatFormEditorComponent,
    MatFormInputComponent,
    MatFormRadioComponent,
    MatFormSelectComponent
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }]
})
export class CovFormMatModule { }
