import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps.component';
import { NationComponent } from './nation/nation.component';
import { BubbleMapComponent } from './bubble/bubble-map.component';
import { RegionComponent } from './region/region.component';
import { DistrictRankingComponent } from './nation/district-ranking-bar.component';

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
    {
      path: 'bubble',
      component: BubbleMapComponent,
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
  BubbleMapComponent,
  RegionComponent,
  DistrictRankingComponent
];
