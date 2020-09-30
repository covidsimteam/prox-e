import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityAssistComponent } from './facility-assist/facility-assist.component';
import { FacilityRegistrationComponent } from './facility-registration/facility-registration.component';



@NgModule({
  declarations: [FacilityAssistComponent, FacilityRegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class FacilityAssistModule { }
