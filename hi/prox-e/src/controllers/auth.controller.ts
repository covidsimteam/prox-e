import { Controller, Post, Response, Route, Tags } from 'tsoa';
import motherLogger from '../logger';
import { AuthResponse } from '../models/auth-response.model';
import { SignInFailure, SignInSuccess } from '../models/sign-in.model';
import { SignOutFailure, SignOutSuccess } from '../models/sign-out.model';
import { SignUpFailure, SignUpSuccess } from '../models/sign-up.model';
import { CovAuthOption } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Route('auth')
export class AuthController extends Controller {
  
  private logger = motherLogger.child({file: 'auth.controller'});
  private authService: AuthService;
  
  constructor() {
    super();
    this.authService = new AuthService();
    this.logger.info("AuthController -> constructor -> authService", this.authService)
  }
  // email: string = '', pasword: string = ''
  private token(option: CovAuthOption): Promise<AuthResponse> {
    switch (+option) {
      case CovAuthOption.signIn:
      return this.authService.signIn();
      case CovAuthOption.signUp:
      return this.authService.signUp();
      case CovAuthOption.signOut:
      default:
      return this.authService.signOut();
    }
  }
  
  // @Body() creds: Authenticate
  @Tags('auth')
  @Post('sign-in')
  @Response<SignInFailure>(401, "Authentication Failed")
  @Response<SignInSuccess>(201, "Authentication Succeeded")
  public async signIn(): Promise<AuthResponse>{
    return this.token(CovAuthOption.signIn);
  }

  // @Body() creds: Authenticate
  @Tags('auth')
  @Post('sign-up')
  @Response<SignUpFailure>(401, "Registration Failed")
  @Response<SignUpSuccess>(201, "Registration Succeeded")
  public async signUp(): Promise<AuthResponse> {
    return this.token(CovAuthOption.signUp);
  }
  
  @Tags('auth')
  @Post('sign-out')
  @Response<SignOutFailure>(401, "Exit Failed")
  @Response<SignOutSuccess>(201, "Exit Succeeded")
  public signOut(): Promise<AuthResponse> {
    return this.token(CovAuthOption.signOut);
  }
  
}

