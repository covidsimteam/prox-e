import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../@auth/guards/auth.guard';
import { DashboardComponent } from '../@comp/dashboard/dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile/profile.component';

const formsModule = () => import('./forms/forms.module')
  .then(m => m.HealthFormsModule);

const mapsModule = () => import('./maps/maps.module')
  .then(m => m.MapsModule);

const chartsModule = () => import('./charts/charts.module')
  .then(m => m.ChartsModule);

const tablesModule = () => import('./tables/tables.module')
  .then(m => m.TablesModule);

const caseTracingModule = () => import('./case-tracing/case-tracing.module')
  .then(m => m.CaseTracingModule);

export const ROUTE_HOME = 'home';
export const ROUTE_STATS = 'stats';
export const ROUTE_CASES = 'cases';
export const ROUTE_TRACES = 'traces';
export const ROUTE_FORMS = 'forms';
export const ROUTE_MAPS = 'maps';
export const ROUTE_CHARTS = 'charts';
export const ROUTE_TABLES = 'tables';
export const ROUTE_PROFILE = 'profile';

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
      loadChildren: caseTracingModule,
    },
    {
      path: ROUTE_TRACES,
      canActivate: [AuthGuard],
      loadChildren: caseTracingModule,
    },
    {
      path: ROUTE_FORMS,
      canActivate: [AuthGuard],
      loadChildren: formsModule,
    },
    {
      path: ROUTE_MAPS,
      canActivate: [AuthGuard],
      loadChildren: mapsModule,
    },
    {
      path: ROUTE_CHARTS,
      loadChildren: chartsModule,
    },
    {
      path: ROUTE_TABLES,
      canActivate: [AuthGuard],
      loadChildren: tablesModule,
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
