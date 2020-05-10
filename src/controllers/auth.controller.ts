
import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from 'tsoa';
// import motherLogger from '../../logger';
import { Credentials } from '../models/user.model';
import { UsersService } from '../services/user.service';



@Route('users')
export class AuthController extends Controller {

  // private logger = motherLogger.child({file: 'auth.controller'});
  private userService: UsersService;

  constructor() {
    super();
    this.userService = new UsersService();
  }

  @Get('{userId}')
  public async getUser(@Path() userId: number, @Query() name?: string) {
    // this.logger.debug(userId, name, 'get request for user');
    return this.userService.get(userId, name);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: Credentials
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().create(requestBody);
    return;
  }

  @Get('/msg')
  public msg() {
      return { msg: 'This is a message' };
  }
}

