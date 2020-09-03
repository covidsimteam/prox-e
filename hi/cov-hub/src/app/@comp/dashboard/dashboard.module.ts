import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule, NbTabsetModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeBoardsComponent } from './home-pages/home-boards/home-boards.component';
import { HomePageComponent } from './home-pages/home-page/home-page.component';
import { LazinessModule } from './lazy-selected-modules/laziness.module';
import { RoleBasedModules } from './role-based-modules/role-based.module';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';


const COMPS = [
  DashboardComponent,
  HomePageComponent,
  HomeBoardsComponent,
]
@NgModule({
  declarations: [
    ...COMPS,
    DashboardGridComponent
  ],
  imports: [
    CommonModule,
    RoleBasedModules,
    LazinessModule,
    NbCardModule,
    NbTabsetModule
  ],
  exports: [...COMPS]
})
export class DashboardModule { }
