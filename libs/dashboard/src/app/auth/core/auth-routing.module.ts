import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbAuthComponent, NbRegisterComponent, NbResetPasswordComponent, NbRequestPasswordComponent } from '@nebular/auth';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'sign-in',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent
      },
      {
        path: 'sign-up',
        component: NbRegisterComponent
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
