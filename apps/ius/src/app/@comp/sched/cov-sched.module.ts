import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCalendarComponent } from './mat-calendar/mat-calendar.component';
import { SchedComponent } from './schedule/sched.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    SchedComponent,
    MatCalendarComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    NbCardModule,
    NbButtonModule
  ],
  exports: [
    SchedComponent,
    MatCalendarComponent
  ]
})
export class CovSchedModule {
  static forRoot(): ModuleWithProviders<CovSchedModule> {
    return {
     ngModule: CovSchedModule
   };
 }
}
