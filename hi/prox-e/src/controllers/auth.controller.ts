import { Body, Controller, Post, Response, Route, Tags } from 'tsoa';
import motherLogger from '../logger';
import { AuthResponse } from '../models/auth-response.model';
import { Authenticate } from '../models/authenticate.model';
import { SignInFailure, SignInSuccess } from '../models/sign-in.model';
import { SignOutFailure, SignOutSuccess } from '../models/sign-out.model';
import { SignUpFailure, SignUpSuccess } from '../models/sign-up.model';
import { CovAuthOption } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { AccountService } from '../services/hoodie/account.service';
import { HoodieService } from '../services/hoodie/hoodie.service';

@Route('auth')
export class AuthController extends Controller {
  
  private logger = motherLogger.child({file: 'auth.controller'});
  private authService: AuthService;
  
  constructor() {
    super();
    this.authService = new AuthService(new AccountService(new HoodieService()));
    this.logger.info("AuthController -> constructor -> authService", this.authService)
  }
  
  private token(option: CovAuthOption, email: string = '', pasword: string = ''): Promise<AuthResponse> {
    switch (+option) {
      case CovAuthOption.signIn:
      return this.authService.signIn(email, pasword);
      case CovAuthOption.signUp:
      return this.authService.signUp(email, pasword);
      case CovAuthOption.signOut:
      default:
      return this.authService.signOut();
    }
  }
  
  @Tags('auth')
  @Post('sign-in')
  @Response<SignInFailure>(401, "Authentication Failed")
  @Response<SignInSuccess>(201, "Authentication Succeeded")
  public async signIn(@Body() creds: Authenticate): Promise<AuthResponse>{
    return this.token(CovAuthOption.signIn, creds.email, creds.password);
  }

  @Tags('auth')
  @Post('sign-up')
  @Response<SignUpFailure>(401, "Registration Failed")
  @Response<SignUpSuccess>(201, "Registration Succeeded")
  public async signUp(@Body() creds: Authenticate): Promise<AuthResponse> {
    return this.token(CovAuthOption.signUp,creds.email, creds.password);
  }
  
  @Tags('auth')
  @Post('sign-out')
  @Response<SignOutFailure>(401, "Exit Failed")
  @Response<SignOutSuccess>(201, "Exit Succeeded")
  public signOut(): Promise<AuthResponse> {
    return this.token(CovAuthOption.signOut);
  }
  
}

