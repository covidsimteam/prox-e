import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule as AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../login/login.component';
import { NbCheckboxModule, NbButtonModule, NbInputModule, NbAlertModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
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
