import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule as AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../login/login.component';
import { NbCheckboxModule, NbButtonModule, NbInputModule, NbAlertModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { RolesComponent } from '../roles/roles.component';
import { LogoutComponent } from '../logout/logout.component';
import { ResetPassComponent } from '../reset-password/reset-pass.component';
import { RegisterComponent } from '../register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPassComponent,
    LogoutComponent,
    ProfileComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
