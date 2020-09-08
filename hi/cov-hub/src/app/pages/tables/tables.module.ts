import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule,
  NbActionsModule,
  NbCheckboxModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, TablesRoutingModule } from './tables-routing.module';

import { NgxCsvParserModule } from 'ngx-csv-parser';

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
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TablesModule { }
