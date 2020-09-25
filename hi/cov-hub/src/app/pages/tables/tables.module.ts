import { AgGridModule } from 'ag-grid-angular';
import { NgModule } from '@angular/core';
import {
  NbActionsModule, NbButtonModule, NbCardModule,
  NbCheckboxModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule, NbTreeGridModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { ThemeModule } from '../../@theme/theme.module';
import { MatCheckboxComponent } from './mat/mat-checkbox/mat-checkbox.component';
import { MatEditorComponent } from './mat/mat-editor/mat-editor.component';
import { MatInputComponent } from './mat/mat-input/mat-input.component';
import { MatRadioComponent } from './mat/mat-radio/mat-radio.component';
import { MatSelectComponent } from './mat/mat-select/mat-select.component';
import { routedComponents, TablesRoutingModule } from './tables-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NgxCsvParserModule,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,

    AgGridModule.withComponents(
      [
        MatCheckboxComponent,
        MatInputComponent,
        MatRadioComponent,
        MatSelectComponent
      ]
    ),
  ],
  declarations: [
    ...routedComponents,
    MatCheckboxComponent,
    MatEditorComponent,
    MatInputComponent,
    MatRadioComponent,
    MatSelectComponent,
  ],
})
export class TablesModule { }
