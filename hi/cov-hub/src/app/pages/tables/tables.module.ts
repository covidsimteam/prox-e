import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {
  NbActionsModule, NbButtonModule, NbCardModule,
  NbCheckboxModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule, NbTreeGridModule
} from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { MatFormCheckboxComponent } from '../../@comp/cov-form/mat/mat-checkbox/mat-checkbox.component';
import { MatFormInputComponent } from '../../@comp/cov-form/mat/mat-input/mat-input.component';
import { MatFormRadioComponent } from '../../@comp/cov-form/mat/mat-radio/mat-radio.component';
import { MatFormSelectComponent } from '../../@comp/cov-form/mat/mat-select/mat-select.component';
import { MatTableCheckboxComponent } from '../../@comp/cov-table/mat/mat-checkbox/mat-checkbox.component';
import { MatTableEditorComponent } from '../../@comp/cov-table/mat/mat-editor/mat-editor.component';
import { MatTableInputComponent } from '../../@comp/cov-table/mat/mat-input/mat-input.component';
import { MatTableRadioComponent } from '../../@comp/cov-table/mat/mat-radio/mat-radio.component';
import { MatTableSelectComponent } from '../../@comp/cov-table/mat/mat-select/mat-select.component';
import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, TablesRoutingModule } from './tables-routing.module';


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
        MatFormCheckboxComponent,
        MatFormInputComponent,
        MatFormRadioComponent,
        MatFormSelectComponent
      ]
    ),
  ],
  declarations: [
    ...routedComponents,
    MatTableCheckboxComponent,
    MatTableEditorComponent,
    MatTableInputComponent,
    MatTableRadioComponent,
    MatTableSelectComponent,
  ],
})
export class TablesModule { }
