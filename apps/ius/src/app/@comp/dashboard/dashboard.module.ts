import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule, NbTabsetModule, NbPopoverModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { LeafletFullscreenModule } from '../../@core/leaflet/leaflet-fullscreen/leaflet-fullscreen.module';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeBoardsComponent } from './home-pages/home-boards/home-boards.component';
import { HomePageComponent } from './home-pages/home-page/home-page.component';
import { LazinessModule } from './lazy-selected-modules/laziness.module';
import { DistrictRankingComponent } from './map/district-ranking-bar.component';
import { MapComponent } from './map/map.component';
import { RoleBasedModules } from './role-based-modules/role-based.module';
import { SeroPrevalenceComponent } from './sero-prevalence/sero-prevalence.component';

const COMPS = [
  DashboardGridComponent,
  DashboardComponent,
  HomePageComponent,
  HomeBoardsComponent,
  MapComponent,
  DistrictRankingComponent,
  SeroPrevalenceComponent
];
@NgModule({
  declarations: [
    ...COMPS,
  ],
  imports: [
    CommonModule,
    RoleBasedModules,
    LazinessModule,
    NbCardModule,
    NbTabsetModule,
    ChartModule,
    LeafletModule,
    LeafletFullscreenModule,
    NbPopoverModule,
  ],
  exports: [...COMPS]
})
export class DashboardModule { }
