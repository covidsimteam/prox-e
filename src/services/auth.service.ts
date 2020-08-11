import motherLogger from '../logger';
import { AccountService } from './hoodie/account.service';
import { Observable } from 'rxjs'

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

  signIn(email: string, password: string): Observable<unknown> {
    return this.accounts.signIn(email, password);
  }

  signUp(email: string, password: string, fullName?: string, confirmedPassword?: string): Observable<unknown>  {
    return this.accounts.signUp(email, password);
  }

  signOut(): Observable<unknown> {
    return this.accounts.signOut();
  }
  
}