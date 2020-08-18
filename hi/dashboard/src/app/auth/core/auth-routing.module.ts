import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { RegisterComponent } from '../register/register.component';
import { RequestPassComponent } from '../request-pass/request-pass.component';
import { ResetPassComponent } from '../reset-password/reset-pass.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'request-password',
        component: RequestPassComponent
      },
      {
        path: 'reset-password',
        component: ResetPassComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
