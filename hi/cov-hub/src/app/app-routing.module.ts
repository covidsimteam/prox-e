import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HOME } from './app.conf';

export const routes: Routes = [
  {
    path: 'hub',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./@auth/auth.module')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: HOME, pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/sign-in' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
