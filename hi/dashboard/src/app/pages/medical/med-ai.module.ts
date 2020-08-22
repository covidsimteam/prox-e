import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedAiUiComponent } from './med-ai-ui/med-ai-ui.component';
import { MedDataPipe } from './med-data.pipe';
import { MedEntryDirective } from './med-entry.directive';



@NgModule({
  declarations: [MedAiUiComponent, MedDataPipe, MedEntryDirective],
  imports: [
    CommonModule
  ]
})
export class MedAiModule { }
