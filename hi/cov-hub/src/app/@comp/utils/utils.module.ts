import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { NepaliDatePickerComponent } from './nepali-date-picker/nepali-date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';


const COMPS = [TimePickerComponent, NepaliDatePickerComponent];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule,
    AmazingTimePickerModule
  ],
  exports: [...COMPS]
})
export class UtilsModule { }
