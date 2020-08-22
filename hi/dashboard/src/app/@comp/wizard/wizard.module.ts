import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardryComponent } from './wizardry/wizardry.component';

const COMPONENTS = [WizardryComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class WizardModule { }
