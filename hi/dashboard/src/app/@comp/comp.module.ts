import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component';
import { CompPipe } from './comp/comp.pipe';
import { CompDirective } from './comp/comp.directive';
import { SchedComponent } from './sched/sched.component';
import { SchedPipe } from './sched/sched.pipe';
import { SchedDirective } from './sched/sched.directive';



@NgModule({
  declarations: [CompComponent, CompPipe, CompDirective, SchedComponent, SchedPipe, SchedDirective],
  imports: [
    CommonModule
  ]
})
export class CompModule { }
