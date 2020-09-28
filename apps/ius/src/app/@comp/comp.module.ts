import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
import { CovSchedModule } from './sched/cov-sched.module';

const COMPS = [
  SchedPipe,
  SchedDirective,
  TimePickerComponent,
  NepaliDatePickerComponent
];

const MODS = [
  CovFormMatModule.forRoot(),
  CovFormNebModule,

  CovTableMatModule.forRoot(),
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
  exports: [
    ...COMPS,
    CovFormMatModule,
    CovFormNebModule,

    CovTableMatModule,
    CovTableNebModule,

    CovSchedModule
  ]
})
export class CompModule { }
