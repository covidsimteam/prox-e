import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CurrentUser } from '../../models/domain.model';
import { BasicAuth, DBAuthResponse } from '../../models/auth-response.model';
import { EnvironmentService } from '../env/environment.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated_ = false;
  private user_: string;
  private pass_: string;
  private role_: string;

  isPrivilegedUser: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
    private router: Router,
  ) {}

  /**
   * @param username CouchDB username
   * @param password CouchDB password
   * @param role is not used for authorization request to CouchDB.
   * It is used to decide whether to reuse the credentials
   * given the Couch user has the role claimed in the login request.
   */
  login(
    username: string,
    password: string,
    role: string = 'public',
  ): Observable<BasicAuth.Response> {
    return this.basicAuthRequest(username, password, role, true);
  }

  /**
   * @param username CouchDB username
   * @param password CouchDB password
   * @param role is not used for authorization request to CouchDB.
   * It is used to decide whether to reuse the credentials
   * given the Couch user has the role claimed in the login request.
   * @param refreshCredentials needs to be set to true to be able to reuse the credentials for future requests
   */
  basicAuthRequest(
    username: string,
    password: string,
    role: string,
    refreshCredentials: boolean = false,
  ) {
    const base64AuthString = btoa(`${username}:${password}`);
    return this.http
      .get<BasicAuth.Response>(this.environment.authUri, {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${base64AuthString}`,
        },
      })
      .pipe(
        tap((response) => {
          if (BasicAuth.isSuccess(response)) {
            const successResponse: BasicAuth.Success = response;
            const roleIsMatching: boolean =
              successResponse.userCtx.roles.indexOf(role) !== -1;
            if (refreshCredentials && roleIsMatching) {
              this.refreshCurrentUserCredentials(
                true,
                username,
                password,
                role,
              );
            }
          }
        }),
      );
  }

  private refreshCurrentUserCredentials(
    isAuthenticated: boolean,
    user: string,
    pass: string,
    role: string,
  ) {
    this.isPrivilegedUser.next(role !== 'public'); // TODO add whitelisted roles
    if (isAuthenticated) {
      this.setCredentials(user, pass, role);
    } else {
      this.removeCredentials();
    }
  }

  private setCredentials(
    username: string,
    password: string,
    role: string,
  ): void {
    this.user_ = username;
    this.pass_ = password;
    this.isAuthenticated_ = true;
    this.role_ = role;
    Object.entries({ username, password, role, isLoggedIn: 'true' }).forEach(
      ([key, val]) => {
        localStorage.setItem(key, val);
      },
    );
  }

  logout(): void {
    this.removeCredentials();
    this.router.navigate(['']);
    this.publicLogin();
  }

  publicLogin() {
    if (this.isPrivileged) {
      this.isPrivilegedUser.next(true); // isPrivilegedUser does not survive browser refresh but isPrivileged does
      return;
    }
    this.login(this.environment.dbPublicUser, this.environment.dbPublicPass).subscribe();
  }

  private removeCredentials(): void {
    this.user_ = null;
    this.pass_ = null;
    this.isAuthenticated_ = false;
    this.role_ = 'public';
    Object.values(CurrentUser).forEach(key => {
      localStorage.removeItem(key);
    });
    this.isPrivilegedUser.next(false);
  }

  get role(): string {
    if (this.role_) return this.role_;
    return localStorage.getItem(CurrentUser.role);
  }

  get isPrivileged(): boolean {
    return this.role && this.role !== 'public'; // TODO add whitelisted roles
  }

  get user(): string {
    if (this.user_) return this.user_;
    return localStorage.getItem(CurrentUser.name);
  }

  get pass(): string {
    if (this.user_) return this.pass_;
    return localStorage.getItem(CurrentUser.pass);
  }

  get isAuthenticated(): boolean {
    if (this.isAuthenticated_) return this.isAuthenticated_;
    return localStorage.getItem(CurrentUser.isLoggedIn) ? true : false;
  }

  // TODO remove when jwt setup is fixed
  userAuthRequestCookieBased(username: string, password: string) {
    this.http
      .post<DBAuthResponse>(this.environment.authUri, { username, password })
      .subscribe((response) => {
        // this.cookieService.create(response);
      });
  }
}
