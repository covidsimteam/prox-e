import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbAlertModule,
    NbIconModule,
    NbInputModule,
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
