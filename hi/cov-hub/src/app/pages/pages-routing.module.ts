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

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: DashboardComponent,
    },
    {
      path: 'stats',
      component: ECommerceComponent,
    },
    {
      path: 'cases',
      canActivate: [AuthGuard],
      loadChildren: caseTracingModule,
    },
    {
      path: 'forms',
      canActivate: [AuthGuard],
      loadChildren: formsModule,
    },
    {
      path: 'maps',
      canActivate: [AuthGuard],
      loadChildren: mapsModule,
    },
    {
      path: 'charts',
      loadChildren: chartsModule,
    },
    {
      path: 'tables',
      canActivate: [AuthGuard],
      loadChildren: tablesModule,
    },
    {
      path: 'profile',
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
