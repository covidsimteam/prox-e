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
import { CovFormMatModule } from './cov-form/mat/cov-form-mat.module';
import { CovFormNebModule } from './cov-form/neb/cov-form-neb.module';
import { CovTableMatModule } from './cov-table/mat/cov-table-mat.module';
import { CovTableNebModule } from './cov-table/neb/cov-table-neb.module';

const COMPS = [
  CompComponent,
  CompPipe,
  CompDirective,
  SchedComponent,
  SchedPipe,
  SchedDirective,
  TimePickerComponent,
  NepaliDatePickerComponent
];

const MODS = [
  CovFormMatModule,
  CovFormNebModule,

  CovTableMatModule,
  CovTableNebModule
];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule,
    WizardModule,
    VisualizationModule,
    UtilsModule,

    ...MODS
  ],
  exports: [...COMPS, ...MODS]
})
export class CompModule { }
