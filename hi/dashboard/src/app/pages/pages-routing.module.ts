import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../@auth/guards/auth.guard';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const formsModule = () => import('./forms/forms.module')
  .then(m => m.FormsModule);

const mapsModule = () => import('./maps/maps.module')
  .then(m => m.MapsModule);

const chartsModule = () => import('./charts/charts.module')
  .then(m => m.ChartsModule);

const tablesModule = () => import('./tables/tables.module')
  .then(m => m.TablesModule);

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: ECommerceComponent,
    },
    {
      path: 'secured/forms',
      canActivate: [AuthGuard],
      loadChildren: formsModule,
    },
    {
      path: 'secured/maps',
      canActivate: [AuthGuard],
      loadChildren: mapsModule,
    },
    {
      path: 'charts',
      loadChildren: chartsModule,
    },
    {
      path: 'secured/tables',
      canActivate: [AuthGuard],
      loadChildren: tablesModule,
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
