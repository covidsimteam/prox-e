import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAlertModule,
  NbIconModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbPopoverModule,
  NbLayoutModule
} from '@nebular/theme';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [ LoginComponent, RegisterComponent, ForgotPasswordComponent ],
  imports: [
    CommonModule,
    NbAlertModule,
    NbIconModule,
    NbInputModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbCardModule,
    NbAlertModule,
    NbLayoutModule
  ],
})
export class LoginModule { }
