import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcrComponent } from './pcr/pcr.component';
import { RdtComponent } from './rdt/rdt.component';
import { ReturneeComponent } from './returnee/returnee.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'returnee',
      component: ReturneeComponent,
    },
    {
      path: 'pcr',
      component: PcrComponent,
    },
    {
      path: 'rdt',
      component: RdtComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  ReturneeComponent,
  PcrComponent,
  TablesComponent,
  RdtComponent,
];
