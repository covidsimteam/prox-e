import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { AuthGuard } from '../@auth/guards/auth.guard';
import { DashboardComponent } from '../@comp/dashboard/dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SchedComponent } from '../@comp/sched/schedule/sched.component';
import { ROUTE_PROFILE,
   ROUTE_TABLES,
   HealthFormsModule,
   CaseTracingModule,
   ROUTE_HOME,
   ROUTE_STATS,
   ROUTE_CASES,
   ROUTE_SCHED,
   ROUTE_FORMS,
   MapsModule,
   ROUTE_MAPS,
   ROUTE_CHARTS,
   ChartsModule,
   TablesModule
  } from './pages.conf';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: ROUTE_HOME,
      component: DashboardComponent,
    },
    {
      path: ROUTE_STATS,
      component: ECommerceComponent,
    },
    {
      path: ROUTE_CASES,
      canActivate: [AuthGuard],
      loadChildren: CaseTracingModule,
    },
    {
      path: ROUTE_SCHED,
      component: SchedComponent
    },
    {
      path: ROUTE_FORMS,
      canActivate: [AuthGuard],
      loadChildren: HealthFormsModule,
    },
    {
      path: ROUTE_MAPS,
      canActivate: [AuthGuard],
      loadChildren: MapsModule,
    },
    {
      path: ROUTE_CHARTS,
      loadChildren: ChartsModule,
    },
    {
      path: ROUTE_TABLES,
      canActivate: [AuthGuard],
      loadChildren: TablesModule,
    },
    {
      path: ROUTE_PROFILE,
      canActivate: [AuthGuard],
      component: ProfileComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
