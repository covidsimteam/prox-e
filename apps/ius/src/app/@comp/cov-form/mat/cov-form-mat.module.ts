import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { AgGridModule } from 'ag-grid-angular';
import { MatFormCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatFormEditorComponent } from './mat-editor/mat-editor.component';
import { MatFormInputComponent } from './mat-input/mat-input.component';
import { MatFormRadioComponent } from './mat-radio/mat-radio.component';
import { MatFormSelectComponent } from './mat-select/mat-select.component';

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
export class CovFormMatModule {
  static forRoot(): ModuleWithProviders<CovFormMatModule> {
    return {
     ngModule: CovFormMatModule
   };
 }
}
