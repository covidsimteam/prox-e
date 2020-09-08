import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ThemeModule } from '../../@theme/theme.module';



const COMPS = [
  ContactComponent,
  ProfileComponent
];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule
  ],
  exports: [...COMPS]
})
export class ProfileModule { }
