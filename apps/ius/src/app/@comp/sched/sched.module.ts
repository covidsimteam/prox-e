import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { SchedComponent } from './schedule/sched.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [SchedComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FullCalendarModule
  ],
  exports:[SchedComponent]
})
export class SchedModule { }
