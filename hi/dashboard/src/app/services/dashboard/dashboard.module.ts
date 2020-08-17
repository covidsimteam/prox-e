import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesModule } from './home-page-modules/home-pages/home-pages.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleBasedModules } from './role-based-modules/role-based.module';
import { LazinessModule } from './lazy-selected-modules/laziness.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomePagesModule,
    RoleBasedModules,
    LazinessModule
  ]
})
export class DashboardModule { }
