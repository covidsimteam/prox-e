import { User } from '../models/user.model';

export class UsersService {
  public get(_id: number, name?: string): User {
    return {
      username: name || 'tester',
      password: "test",
    };
  }

  public create(user: User): User {
    return {
      username: user.username, 
      password: user.password
    };
  }
}