import { ReferralService } from './referral.service';
import { PaymentService } from './payment.service';
import { FromModule } from './from/from.module';
import { TidModule } from './tid/tid.module';
import { ToModule } from './to/to.module';
import { TransactionModule } from './transaction/transaction.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TransactionModule,
    ToModule,
    TidModule,
    FromModule,
  ],
  providers: [PaymentService, ReferralService],
  exports: [PaymentService, ReferralService]
})
export class PaymentModule { }
