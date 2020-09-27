import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCalendarComponent } from './mat-calendar/mat-calendar.component';
import { SchedComponent } from './sched.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

const COMPS = [
  MatCalendarComponent,
  SchedComponent
];

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    MatDatepickerModule
  ],
  exports: [
    ...COMPS
  ]
})
export class CovSchedModule { }
