import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllReturneesComponent } from './all-returnees/all-returnees.component';
import { CloseAndCasualNetComponent } from './close-and-casual-net/close-and-casual-net.component';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';
import { SampleReportingComponent } from './sample-reporting/sample-reporting.component';

const COMPS = [
  SampleCollectionComponent,
  SampleReportingComponent,
  CloseAndCasualNetComponent,
  AllReturneesComponent
];

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPS
  ]
})
export class SampleCollectionModule { }
