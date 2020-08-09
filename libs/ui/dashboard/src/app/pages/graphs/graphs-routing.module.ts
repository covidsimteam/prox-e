import { Routes, RouterModule } from '@angular/router';
import { GraphsComponent } from './graphs.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ServersComponent } from './servers/servers.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GraphsComponent,
    children: [
      {
        path: 'concepts',
        component: ConceptsComponent,
      },
      {
        path: 'servers',
        component: ServersComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphsRoutingModule { }

export const routedComponents = [
  GraphsComponent,
  ConceptsComponent,
  ServersComponent,
];
