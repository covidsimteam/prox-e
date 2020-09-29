import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'cov-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <cov-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </cov-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
