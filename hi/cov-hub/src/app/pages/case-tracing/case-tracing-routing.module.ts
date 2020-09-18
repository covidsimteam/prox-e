import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseTracingComponent } from './case-tracing.component';

const routes: Routes = [
    {
        path: '',
        component: CaseTracingComponent,
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CaseTracingRoutingModule { }

export const routedComponents = [
    CaseTracingComponent
];
