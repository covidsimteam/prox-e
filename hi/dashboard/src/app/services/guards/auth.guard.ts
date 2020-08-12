import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: NbAuthService,
  ) {}


  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authService.isAuthenticated) return this.authService.isAuthenticated()
      .pipe(
        tap((authenticated: boolean | UrlTree) => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );

      this.router.navigate(['auth/login'], {
        queryParams: {
          returnUrl: state.url,
        },
      });
      return false;
  }
}
