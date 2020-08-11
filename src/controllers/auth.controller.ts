import { Controller, Route } from 'tsoa';
import motherLogger from '../logger';
import { AuthService } from '../services/auth.service';
import { AccountService } from '../services/hoodie/account.service';
import { HoodieService } from '../services/hoodie/hoodie.service';
import { AuthOptions } from '../models/user.model';


interface AuthErrorJSON {
  message: "Authentication Failed";
  details: { [name: string]: unknown };
}

@Route('auth')
export class AuthController extends Controller {

  private logger = motherLogger.child({file: 'auth.controller'});
  private authService: AuthService;

  constructor(
    private hoodie: 
  ) {
    super();
    this.authService = new AuthService(new AccountService(new HoodieService()));
    this.logger.info("AuthController -> constructor -> authService", this.authService)
  }

  private token(email: string, pasword: string, option: CovAuthOption) {
    switch (option) {
      case option.:
        
        break;
    
      default:
        break;
    }
  }

  login(email: string, password: string, option: AuthOptions) {
    return this.token(email, password, option);
  }


}

