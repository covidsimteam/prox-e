import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompComponent } from './comp/comp.component';
import { CompDirective } from './comp/comp.directive';
import { CompPipe } from './comp/comp.pipe';
import { SchedComponent } from './sched/sched.component';
import { SchedDirective } from './sched/sched.directive';
import { SchedPipe } from './sched/sched.pipe';
import { VisualizationModule } from './viz/visualization.module';
import { WizardModule } from './wizard/wizard.module';

const DECLARATIVES = [
  CompComponent,
  CompPipe,
  CompDirective,

  SchedComponent,
  SchedPipe,
  SchedDirective
];

@NgModule({
  declarations: [...DECLARATIVES],
  imports: [
    CommonModule,
    WizardModule,
    VisualizationModule
  ],
  exports: [...DECLARATIVES]
})
export class CompModule { }
