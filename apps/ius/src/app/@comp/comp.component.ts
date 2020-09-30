import { Component } from '@angular/core';
import { MENU_ITEMS } from '../sidebar-menu';

@Component({
  selector: 'cov-comp-elements',
  template: `

  <cov-two-columns-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
  </cov-two-columns-layout>
  `,
})
export class CompComponent {
  menu = MENU_ITEMS;
}
