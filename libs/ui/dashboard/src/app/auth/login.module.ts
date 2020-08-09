import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAlertModule,
  NbIconModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbLayoutModule
} from '@nebular/theme';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  declarations: [ LoginComponent ],
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
    NbLayoutModule,
    NbAuthModule
  ],
})
export class LoginModule { }
