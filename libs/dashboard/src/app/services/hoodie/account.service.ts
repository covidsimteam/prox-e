import { Injectable } from '@angular/core';
import { HoodieService } from './hoodie.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private hoodie: HoodieService) { }

  signUp(username: string, password: string): Observable<unknown> {
    return from(this.hoodie.account.signUp({ username, password }));
  }

  signIn(username: string, password: string): Observable<unknown> {
    return from(this.hoodie.account.signIn({ username, password }));
  }

  signOut(): Observable<unknown> {
    return from(this.hoodie.account.signOut());
  }
}
