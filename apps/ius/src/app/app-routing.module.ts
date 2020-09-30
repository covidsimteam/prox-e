import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HOME, PREF_HUB, PREF_AUTH, PREF_CORE } from './app.conf';
import { CompModule } from './app.conf';

export const routes: Routes = [
  {
    path: PREF_HUB,
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: PREF_AUTH,
    loadChildren: () => import('./@auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: PREF_CORE,
    loadChildren: CompModule,
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
