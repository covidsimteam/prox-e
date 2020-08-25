import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps.component';
import { DistrictRankingComponent } from './nation/district-ranking-bar.component';
import { NationComponent } from './nation/nation.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [
    {
      path: 'area/:name',
      component: RegionComponent,
    },
    {
      path: 'area/:name/:type',
      component: RegionComponent,
    },
    {
      path: 'nepal',
      component: NationComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  NationComponent,
  RegionComponent,
  DistrictRankingComponent
];
