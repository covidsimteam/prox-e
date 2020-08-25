import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'acc',
  component: AccountComponent,
}];

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [AccountComponent]
})
export class AccountModule { }
