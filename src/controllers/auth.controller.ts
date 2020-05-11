
import { AuthService } from '../services/auth.service';
import { Body, Controller, Post, Response, Route, SuccessResponse, Tags } from 'tsoa';
import motherLogger from '../logger';
import { Credentials } from '../models/user.model';


interface AuthErrorJSON {
  message: "Authentication Failed";
  details: { [name: string]: unknown };
}

@Route('users')
export class AuthController extends Controller {

  private logger = motherLogger.child({file: 'auth.controller'});
  private authService: AuthService;

  constructor() {
    super();
    this.authService = new AuthService();
    this.logger.info("AuthController -> constructor -> authService", this.authService)
  }


  @Tags('Auth')
  @SuccessResponse("201", "Token Created")
  @Response<AuthErrorJSON>(401, "Authentication Failed")
  @Post('login')
  public async createJWT(
    @Body() requestBody: Credentials
  ): Promise<{ [key: string]: any; } | null> {
    this.logger.info("AuthController -> createJWT -> authService", this.authService)
    return this.authService.jwtAuth(requestBody.username, requestBody.password);
  }

}

