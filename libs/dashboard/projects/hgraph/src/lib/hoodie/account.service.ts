import { Injectable } from '@angular/core';
import { HoodieService } from './hoodie.service';
import { from, Observable } from 'rxjs';

import { SignUpResponse } from '../model/sign-up.model';
import { SignInResponse } from '../model/sign-in.model';
import { SignOutResponse } from '../model/sign-out.model';
import { ResetPassResponse } from '../model/reset-pass.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private hoodie: HoodieService) { }

  signUp(username: string, password: string): Observable<SignUpResponse> {
    return from(this.hoodie.account.signUp({ username, password })) as Observable<SignUpResponse>;
  }

  signIn(username: string, password: string): Observable<SignInResponse> {
    return from(this.hoodie.account.signIn({ username, password })) as Observable<SignInResponse>;
  }

  onSignIn(): Observable<SignInResponse> {
    return from(this.hoodie.account.on('signin')) as Observable<SignInResponse>;
  }

  beforeSignIn(): Observable<unknown> {
    return this.hoodie.account.hook.before('signin');
  }

  signOut(): Observable<SignOutResponse> {
    return from(this.hoodie.account.signOut()) as Observable<SignOutResponse>;
  }

  onSignOut(): Observable<unknown> {
    return from(this.hoodie.account.hook.after('signout'));
  }

  requestPass(contact: string): Observable<ResetPassResponse> {
    return from(this.hoodie.account.request({
      type: 'passwordreset',
      contact
    })) as Observable<ResetPassResponse>;
  }

  get session(): Observable<unknown> {
    return from(this.hoodie.account.get('session'));
  }

}
