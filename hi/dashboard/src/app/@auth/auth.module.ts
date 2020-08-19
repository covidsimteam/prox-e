import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { AuthRoutingModule as AuthRoutingModule } from './core/auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RequestPassComponent } from './request-pass/request-pass.component';
import { ResetPassComponent } from './reset-password/reset-pass.component';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPassComponent,
    LogoutComponent,
    ProfileComponent,
    RolesComponent,
    RequestPassComponent,
    ResetPassComponent
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
