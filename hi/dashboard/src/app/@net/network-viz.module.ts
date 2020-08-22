import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkVizComponent } from './network-viz/network-viz.component';
import { NetworkVizDirective } from './network-viz.directive';
import { NetworkVizPipe } from './network-viz.pipe';



@NgModule({
  declarations: [NetworkVizComponent, NetworkVizDirective, NetworkVizPipe],
  imports: [
    CommonModule
  ]
})
export class NetworkVizModule { }
