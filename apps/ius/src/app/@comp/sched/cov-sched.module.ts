import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { SchedComponent } from './schedule/sched.component';

@NgModule({
  declarations: [
    SchedComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    MatDatepickerModule,
    MatNativeDateModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, SatDatepickerModule, SatNativeDateModule
  ],
  exports: [
    SchedComponent
  ]
})
export class CovSchedModule {
  static forRoot(): ModuleWithProviders<CovSchedModule> {
    return {
     ngModule: CovSchedModule
   };
 }
}
