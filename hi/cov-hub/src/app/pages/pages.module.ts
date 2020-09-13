import { NgModule } from '@angular/core';
import { 
  NbLayoutModule, 
  NbMenuModule, 
  NbCardModule,
  NbWindowModule } from '@nebular/theme';
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
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AdmincontrolComponent } from './dataentry/admincontrol/admincontrol.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewcaseComponent } from './dataentry/admincontrol/newcase/newcase.component';
import { NewuserComponent } from './dataentry/admincontrol/newuser/newuser.component';

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
    DashboardModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    NbWindowModule.forChild({
      closeOnBackdropClick: false,
      closeOnEsc: true
    })
  ],
  declarations: [PagesComponent, ActivetasksComponent, TaskstatsComponent, ContacttracingComponent, DataentryComponent, AdmincontrolComponent, NewcaseComponent, NewuserComponent],
})
export class PagesModule {
}
