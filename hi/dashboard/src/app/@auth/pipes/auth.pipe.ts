import { Pipe, PipeTransform } from '@angular/core';
import { NbAuthToken } from '@nebular/auth';
import { of as observableOf, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';

@Pipe({
  name: 'auth'
})
export class AuthPipe implements PipeTransform {

  constructor(private authService: AuthService) {}

  transform(url: string): Observable<string> {
    if (!url) {
      return observableOf(url);
    }
    return this.authService.getToken()
      .pipe(map((token: NbAuthToken) => {
        const separator = url.indexOf('?') > 0 ? '&' : '?';
        return `${url}${separator}token=${token.getValue()}`;
      }));
  }

}
