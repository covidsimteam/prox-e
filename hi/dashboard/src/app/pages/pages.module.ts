import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PaymentsModule } from './payments/payments.module';
import { AccountModule } from './account/account.module';
import { FilesComponent } from './files/files.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
    PaymentsModule,
    AccountModule
  ],
  declarations: [
    PagesComponent,
    FilesComponent
  ],
})
export class PagesModule {
}
