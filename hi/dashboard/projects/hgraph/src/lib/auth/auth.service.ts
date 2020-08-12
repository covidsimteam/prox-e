import { Injectable } from '@angular/core';
import { AuthStream } from '../model/model.stream';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: AuthStream;

  constructor() { }

  set user(user: AuthStream) { this.users = user; }
  get user(): AuthStream { return this.users; }
}
