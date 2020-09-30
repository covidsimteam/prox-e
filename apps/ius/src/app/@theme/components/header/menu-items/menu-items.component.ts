import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  private static readonly PROFILE = 'Profile';
  private static readonly LOGOUT = 'Log Out';

  constructor() { }

  ngOnInit(): void {
  }

  get items() {
    const userLink = '/pages/users/current/';
    return [
      { title: MenuItemsComponent.PROFILE, link: userLink, queryParams: { profile: true } },
      { title: MenuItemsComponent.LOGOUT },
    ];
  }

}
