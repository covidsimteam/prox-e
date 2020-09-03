import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../@auth/core/auth.service';
import { EnvironmentService } from '../../services/env/environment.service';

// Use this only for http communication with prox-e (rare)
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthService,
      private envService: EnvironmentService,
      private router: Router
      ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return null;
    }

    interceptor(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
      const username = this.authService.user;
      const password = this.authService.pass;
      const isLoggedIn = this.authService.isAuthenticated;
      const isApiUrl = request.url.startsWith(this.envService.authUri);
      if (isLoggedIn && isApiUrl) {
        const base64AuthString = btoa(`${username}:${password}`);
        request = request?.clone({
            setHeaders: {
                Authorization: `Basic ${base64AuthString}`
            }
        });
      }
      if (request) {
        next.handle(request)
          .pipe(catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.router.navigate(['auth/login']);
            }
            // TODO: handle 403 error ?
            console.log('From interceptor', error);
            return throwError(error);
          }));
      }
      return next.handle(request);
  }

}
