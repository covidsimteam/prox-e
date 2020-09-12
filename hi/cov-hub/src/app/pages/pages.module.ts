import { NgModule } from '@angular/core';
import { NbLayoutModule, NbMenuModule, NbCardModule } from '@nebular/theme';
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
import { ActivetasksComponent } from './dataentry/activetasks/activetasks.component';
import { TaskstatsComponent } from './dataentry/taskstats/taskstats.component';
import { ContacttracingComponent } from './dataentry/contacttracing/contacttracing.component';
import { DataentryComponent } from './dataentry/dataentry.component';

@NgModule({
  imports: [
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
    NbCardModule,
    SampleCollectionModule,
    ProfileModule,
    DashboardModule
  ],
  declarations: [PagesComponent, ActivetasksComponent, TaskstatsComponent, ContacttracingComponent, DataentryComponent],
})
export class PagesModule {
}
