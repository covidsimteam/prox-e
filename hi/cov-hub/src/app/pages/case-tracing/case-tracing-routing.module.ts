import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseTracingComponent } from './case-tracing.component';
import { PositivesComponent } from './positives/positives.component';

const routes: Routes = [
  {
    path: 'cases',
    component: PositivesComponent,
  }
  ,
  {
    path: 'traces',
    component: CaseTracingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseTracingRoutingModule { }

export const routedComponents = [
  CaseTracingComponent
];
