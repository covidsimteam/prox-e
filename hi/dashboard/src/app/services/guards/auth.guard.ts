import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}


  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (!this.authService.isAuthenticated || this.authService.isInPublicMode) {
        this.router.navigate(['auth/login'], {
          queryParams: {
            returnUrl: state?.url || '/hub/home',
          },
        });
        return false;
      }
      return true;
  }
}
