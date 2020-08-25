import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentModule } from '../payment/payment.module';
import { PayTelemetryModule } from '../pay-telemetry/pay-telemetry.module';
import { PaySearchModule } from '../pay-search/pay-search.module';
import { PayLogoutModule } from '../pay-logout/pay-logout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class PayLoginModule { }
