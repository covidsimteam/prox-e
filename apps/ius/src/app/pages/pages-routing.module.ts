import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { AuthGuard } from '../@auth/guards/auth.guard';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';
import {
  CaseTracingModule,
  ChartsModule, HealthFormsModule,
  MapsModule, ROUTE_CASES,
  ROUTE_CHARTS, ROUTE_FORMS,
  ROUTE_MAPS, ROUTE_PROFILE,
  ROUTE_STATS, ROUTE_TABLES,
  TablesModule
} from '../app.conf';
import { ProfileComponent } from './profile/profile/profile.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
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
