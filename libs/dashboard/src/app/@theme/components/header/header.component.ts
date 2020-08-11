import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthService, NbPasswordStrategyToken } from '@nebular/auth';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../@core/utils';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  isPrivilegedUser = false;

  themes = [
    {
      value: 'default',
      name: 'Light',
      icon: 'bulb-outline',
    },
    {
      value: 'dark',
      name: 'Dark',
      icon: 'moon-outline',
    },
    // {
    //   value: 'cosmic',
    //   name: 'Cosmic',
    // },
    // {
    //   value: 'corporate',
    //   name: 'Corporate',
    // },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private authService: NbAuthService,
              private breakpointService: NbMediaBreakpointsService) {


    this.authService.onTokenChange()
    .subscribe((token: any): NbPasswordStrategyToken => {

      if (token.isValid()) {
        this.user = token.getPayload();
      }

    });
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.authService.isPrivilegedUser.subscribe(privilegeCheck => this.isPrivilegedUser = privilegeCheck);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  logout() {
    this.authService.logout();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
