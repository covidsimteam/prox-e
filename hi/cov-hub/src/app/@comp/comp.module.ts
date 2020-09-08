import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompComponent } from './comp/comp.component';
import { CompDirective } from './comp/comp.directive';
import { CompPipe } from './comp/comp.pipe';
import { SchedComponent } from './sched/sched.component';
import { SchedDirective } from './sched/sched.directive';
import { SchedPipe } from './sched/sched.pipe';
import { NepaliDatePickerComponent } from './utils/nepali-date-picker/nepali-date-picker.component';
import { TimePickerComponent } from './utils/time-picker/time-picker.component';
import { UtilsModule } from './utils/utils.module';
import { VisualizationModule } from './viz/visualization.module';
import { WizardModule } from './wizard/wizard.module';

const COMPS = [
  CompComponent,
  CompPipe,
  CompDirective,
  SchedComponent,
  SchedPipe,
  SchedDirective
];

@NgModule({
  declarations: [...COMPS, TimePickerComponent, NepaliDatePickerComponent],
  imports: [
    CommonModule,
    WizardModule,
    VisualizationModule,
    UtilsModule
  ],
  exports: [...COMPS]
})
export class CompModule { }
