import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesModule } from './home-page-modules/home-pages/home-pages.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomePagesModule,

  ]
})
export class DashboardModule { }
