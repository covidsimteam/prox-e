import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { LeafletFullscreenModule } from '../../@core/leaflet/leaflet-fullscreen/public-api';
import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    LeafletModule,
    LeafletFullscreenModule,
    MapsRoutingModule,
    NgxEchartsModule,
    NbCardModule,
    NbSpinnerModule,
    ChartModule
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
