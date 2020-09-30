import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_HOME, ROUTE_SCHED } from '../app.conf';
import { CompComponent } from './comp.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SchedComponent } from './sched/schedule/sched.component';

const routes: Routes = [
  {
    path: '',
    component: CompComponent,
    children: [
      {
        path: ROUTE_HOME,
        component: DashboardComponent,
      },
      {
        path: ROUTE_SCHED,
        component: SchedComponent,
      },
      // {
      //   path: ROUTE_TABLES,
      //   component: MatTableEditorComponent
      // },
      // {
      //   path: ROUTE_FORMS,
      //   component: MatFormEditorComponent
      // }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CompRoutingModule {
}
