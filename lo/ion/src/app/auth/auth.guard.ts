import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { HOME } from '../../../../../hi/cov-hub/src/app/app.conf';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if (this.authService.isAuthenticated || !this.authService.isInPublicMode) {
      return true;
    }
    this.router.navigate(['auth/login'], {
      queryParams: {
        returnUrl: state?.url || HOME,
      },
    });
    return false;
  }
}
