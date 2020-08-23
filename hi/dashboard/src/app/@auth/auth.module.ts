import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthPipe } from './pipes/auth.pipe';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RequestPassComponent } from './request-pass/request-pass.component';
import { ResetPassComponent } from './reset-password/reset-pass.component';
import { AuthRoutingModule as AuthRoutingModule } from './routing/auth-routing.module';


const NB_MODULES = [
  NbIconModule,
  NbLayoutModule,
  NbCardModule,
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule,
  NbButtonModule,
];

const DECLARATIVES = [
  LoginComponent,
  RegisterComponent,
  RequestPassComponent,
  ResetPassComponent,
  LogoutComponent,
  ProfileComponent,
  AuthPipe
];

@NgModule({
  declarations: [
    ...DECLARATIVES
  ],
  imports: [
    ...NB_MODULES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule
  ],
  exports: [...DECLARATIVES]
})
export class AuthModule { }
