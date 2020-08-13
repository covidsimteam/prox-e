import motherLogger from '../logger';
import { SignInResponse } from '../models/sign-in.model';
import { SignOutResponse } from '../models/sign-out.model';
import { SignUpResponse } from '../models/sign-up.model';

export class AuthService {
  
  private readonly logger = motherLogger.child({ file: 'AuthService' });
  
  private readonly dbHost: string;
  private static instance: AuthService;
  
  constructor(
  ) {
    this.logger.info("AuthService -> constructor -> dbHost", this.dbHost)
    if (!AuthService.instance) {
      AuthService.instance = this;
    }
    return AuthService.instance;
  }
// email: string, password: string
  signIn(): Promise<SignInResponse> {
    return Promise.reject();
  }
// email: string, password: string
  signUp(): Promise<SignUpResponse>  {
    return Promise.reject();
  }

  signOut(): Promise<SignOutResponse> {
    return Promise.reject();
  }
  
}