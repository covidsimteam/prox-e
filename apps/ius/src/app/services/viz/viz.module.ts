import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartGenService } from './chart-gen.service';
import { DigramGenService } from './digram-gen.service';
import { MapGenService } from './map-gen.service';
import { NetworkGenService } from './network-gen.service';

const SERVICES = [ChartGenService, DigramGenService, MapGenService, NetworkGenService];

@NgModule({
  declarations: SERVICES,
  imports: [
    CommonModule
  ],
  exports: SERVICES,
  providers: SERVICES
})
export class VizModule { }
