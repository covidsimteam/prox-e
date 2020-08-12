import { HoodieService } from './hoodie.service';
import { SignUpResponse } from '../../models/sign-up.model'
import { SignInResponse } from '../../models/sign-in.model';
import { SignOutResponse } from '../../models/sign-out.model';

export class AccountService {
  
  constructor(private hoodie: HoodieService) { }

  signUp(username: string, password: string): Promise<SignUpResponse> {
    return this.hoodie.account.signUp({ username, password });
  }

  signIn(username: string, password: string): Promise<SignInResponse> {
    return this.hoodie.account.signIn({ username, password });
  }

  signOut(): Promise<SignOutResponse> {
    return this.hoodie.account.signOut();
  }

  resetPass(contact: string): Promise<unknown> {
    return this.hoodie.account.request({
      type: 'passwordreset',
      contact
    });
  }
}
