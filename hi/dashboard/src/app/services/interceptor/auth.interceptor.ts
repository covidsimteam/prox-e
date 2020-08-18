import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/core/auth.service';
import { EnvironmentService } from '../env/environment.service';

// Use this only for http communication with prox-e (rare)
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthService,
      private envService: EnvironmentService
      ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const username = this.authService.user;
        const password = this.authService.pass;
        const isLoggedIn = this.authService.isAuthenticated;
        const isApiUrl = request.url.startsWith(this.envService.authUri);
        if (isLoggedIn && isApiUrl) {
          const base64AuthString = btoa(`${username}:${password}`);
          request = request.clone({
              setHeaders: {
                  Authorization: `Basic ${base64AuthString}`
              }
          });
        }
        return next.handle(request);
    }
}
