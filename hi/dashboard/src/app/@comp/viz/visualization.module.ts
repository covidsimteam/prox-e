import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizComposerComponent } from './viz-composer/viz-composer.component';
import { VizWizardComponent } from './viz-wizard/viz-wizard.component';
import { VizSchedComponent } from './viz-sched/viz-sched.component';



@NgModule({
  declarations: [VizComposerComponent, VizWizardComponent, VizSchedComponent],
  imports: [
    CommonModule
  ]
})
export class VisualizationModule { }
