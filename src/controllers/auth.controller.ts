
import { AuthService } from '../services/auth.service';
import { Body, Controller, Post, Response, Route, SuccessResponse, Tags } from 'tsoa';
import motherLogger from '../logger';
import { Credentials } from '../models/user.model';


interface AuthErrorJSON {
  message: "Authentication Failed";
  details: { [name: string]: unknown };
}

@Route('auth')
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
  @Post('jwt')
  public async createJWT(
    @Body() requestBody: Credentials
  ): Promise<void> {
    try {
      this.setStatus(201);
      this.authService.jwtAuth(requestBody.username, requestBody.password);
    } catch (error) {
      this.setStatus(401);
    }
  }

  @Tags('Auth')
  @SuccessResponse("201", "AuthSession Cookie Created")
  @Response<AuthErrorJSON>(401, "Authentication Failed")
  @Post('cookie')
  public async createCookie(
    @Body() requestBody: Credentials
  ): Promise<void> {
    try {
      this.setStatus(201);
      this.authService.cookieAuth(requestBody.username, requestBody.password);
    } catch (error) {
      this.setStatus(401);
    }
  }

}

