import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserAuthenticated = true;
  private currentUserId = 'u3';

  constructor() {}

  get userIsAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }

  get userId(): string {
    return this.currentUserId;
  }

  login() {
    this.isUserAuthenticated = true;
  }

  logout() {
    this.isUserAuthenticated = false;
  }
}
