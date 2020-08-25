import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';
import { SampleReportingComponent } from './sample-reporting/sample-reporting.component';
import { CloseAndCasualNetComponent } from './close-and-casual-net/close-and-casual-net.component';
import { AllReturneesComponent } from './all-returnees/all-returnees.component';



@NgModule({
  declarations: [SampleCollectionComponent, SampleReportingComponent, CloseAndCasualNetComponent, AllReturneesComponent],
  imports: [
    CommonModule
  ]
})
export class SampleCollectionModule { }
