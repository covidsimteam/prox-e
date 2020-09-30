import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthModule, CompModule, HOME, PREF_AUTH, PREF_CORE } from './app.conf';

export const routes: Routes = [
  {
    path: PREF_AUTH,
    loadChildren: AuthModule,
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
