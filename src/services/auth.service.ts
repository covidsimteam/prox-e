import motherLogger from '../logger';
import { AccountService } from './hoodie/account.service';
import { Observable } from 'rxjs';
import { SignInResponse } from '../models/sign-in.model';
import { SignUpResponse } from '../models/sign-up.model';
import { SignOutResponse } from '../models/sign-out.model';

export class AuthService {
  
  private readonly logger = motherLogger.child({ file: 'AuthService' });
  
  private readonly dbHost: string;
  private static instance: AuthService;
  
  constructor(
    private accounts: AccountService
  ) {
    this.logger.info("AuthService -> constructor -> dbHost", this.dbHost)
    if (!AuthService.instance) {
      AuthService.instance = this;
    }
    return AuthService.instance;
  }

  signIn(email: string, password: string): Observable<SignInResponse> {
    return this.accounts.signIn(email, password);
  }

  signUp(email: string, password: string, fullName?: string, confirmedPassword?: string): Observable<SignUpResponse>  {
    return this.accounts.signUp(email, password);
  }

  signOut(): Observable<SignOutResponse> {
    return this.accounts.signOut();
  }
  
}