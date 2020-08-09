import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { routedComponents, GraphsRoutingModule } from './graphs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    GraphsRoutingModule
  ],
  declarations: [...routedComponents],
})
export class GraphsModule { }

