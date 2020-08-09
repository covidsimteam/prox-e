import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { NbAuthComponent } from '@nebular/auth';

const routes: Routes = [{
  path: '',
  component: NbAuthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
  ],
},
{
  path: '**',
  component: NotFoundComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
