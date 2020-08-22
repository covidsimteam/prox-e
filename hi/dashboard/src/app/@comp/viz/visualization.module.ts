import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizComposerComponent } from './viz-composer/viz-composer.component';
import { VizWizardComponent } from './viz-wizard/viz-wizard.component';
import { VizSchedComponent } from './viz-sched/viz-sched.component';
import { WizardModule } from '../wizard/wizard.module';

const COMPONENTS = [VizComposerComponent, VizWizardComponent, VizSchedComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    WizardModule,
  ],
  exports: [...COMPONENTS]
})
export class VisualizationModule { }
