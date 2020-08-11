import { HoodieService } from './hoodie.service';
import { from, Observable } from 'rxjs';

import { SignUpResponse } from '../../models/sign-up.model'
import { SignInResponse } from '../../models/sign-in.model';
import { SignOutResponse } from '../../models/sign-out.model';

export class AccountService {
  
  constructor(private hoodie: HoodieService) { }

  signUp(username: string, password: string): Observable<SignUpResponse> {
    return from(this.hoodie.account.signUp({ username, password })) as Observable<SignUpResponse>;
  }

  signIn(username: string, password: string): Observable<SignInResponse> {
    return from(this.hoodie.account.signIn({ username, password })) as Observable<SignInResponse>;
  }

  signOut(): Observable<SignOutResponse> {
    return from(this.hoodie.account.signOut()) as Observable<SignOutResponse>;
  }
}
