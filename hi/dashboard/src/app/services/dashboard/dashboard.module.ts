import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LazinessModule } from './lazy-selected-modules/laziness.module';
import { RoleBasedModules } from './role-based-modules/role-based.module';
import { HomePageComponent } from './home-pages/home-page/home-page.component';
import { HomeBoardsComponent } from './home-pages/home-boards/home-boards.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    HomeBoardsComponent,
  ],
  imports: [
    CommonModule,
    RoleBasedModules,
    LazinessModule,
  ]
})
export class DashboardModule { }
