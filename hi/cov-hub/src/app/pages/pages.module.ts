
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import {
  NbLayoutModule,
  NbMenuModule,
  NbDatepickerModule,
  NbInputModule
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { AccountModule } from './account/account.module';
import { PcrDemandModule } from './demand/pcr-demand.module';
import { DiabetesModule } from './diabetic/diabetes.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { ExchangeModule } from './exchange/exchange.module';
import { FacilityAssistModule } from './facility/facility-assist.module';
import { FilesModule } from './files/files.module';
import { HealthFormsModule } from './forms/forms.module';
import { HpcConfigModule } from './hpc/hpc-config.module';
import { IdModule } from './id/id.module';
import { MapsModule } from './maps/maps.module';
import { MedAiModule } from './medical/med-ai.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PaymentsModule } from './payments/payments.module';
import { ProfileModule } from './profile/profile.module';
import { SampleCollectionModule } from './sample/sample-collection.module';
import { TablesModule } from './tables/tables.module';
import { DashboardModule } from '../@comp/dashboard/dashboard.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MatRadioModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
    PaymentsModule,
    AccountModule,
    PcrDemandModule,
    DiabetesModule,
    ExchangeModule,
    FacilityAssistModule,
    FilesModule,
    HealthFormsModule,
    HpcConfigModule,
    IdModule,
    MapsModule,
    MedAiModule,
    TablesModule,
    NbLayoutModule,
    SampleCollectionModule,
    ProfileModule,
    DashboardModule,
    TranslateModule.forChild({extend: true}),
    NbDatepickerModule,
    NbInputModule
  ],
  declarations: [PagesComponent],
})
export class PagesModule {
}
