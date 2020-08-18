import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PaymentsModule } from './payments/payments.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
    PaymentsModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
