import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BasicAuth } from '../../models/auth-response.model';
import { CurrentUser } from '../../models/domain.model';
import { EnvironmentService } from '../env/environment.service';
import { IdPrefixService } from '../utils/id-prefix.service';
import { RolesService } from './roles.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated_ = false;
  private user_: string;
  private pass_: string;
  private authArr: string[] = [''];
  private isInPublicMod: boolean = false;

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
    private router: Router,
    private roleService: RolesService,
    private idPrefixService: IdPrefixService
  ) {  }

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
    publicMode: boolean = false
  ): Observable<BasicAuth.Response> {
    this.isInPublicMode = publicMode;
    return this.basicAuthRequest(username, password, true);
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
        tap((response: BasicAuth.Response) => {
          if (BasicAuth.isSuccess(response)) {
            if (refreshCredentials) {
              this.refreshCurrentUserCredentials(
                true,
                username,
                password,
                response.userCtx.roles
              );
            }
          }
        }),
      );
  }

  get isInPublicMode(): boolean { return this.isInPublicMod; }
  set isInPublicMode(v: boolean) { this.isInPublicMod = v; }

  private async roleArraySetter(roles: string[]) {
    this.roleService.roles = roles;
    console.log('AuthService -> roleArraySetter -> this.roles', this.roleService.roles);
    this.authArr = this.idPrefixService.resolveIdPrefixes(roles);
    console.log('AuthService -> roleArraySetter -> this.authArr', this.authArr);
  }

  private refreshCurrentUserCredentials(
    isAuthenticated: boolean,
    user: string,
    pass: string,
    roles: string[]
  ) {
    if (isAuthenticated) {
      this.setCredentials(user, pass, roles);
      this.roleArraySetter(roles);
    } else {
      this.removeCredentials();
    }
  }

  private setCredentials(
    username: string,
    password: string,
    roles: string[]
  ): void {
    this.user_ = username;
    this.pass_ = password;
    this.isAuthenticated_ = true;
    Object.entries({ username, password, ...roles, isLoggedIn: 'true' })
      .forEach(
        ([key, val]) => {
          localStorage.setItem(key, val.toString());
        },
    );
  }

  logout(): void {
    this.removeCredentials();
    this.router.navigate(['']);
    this.publicLogin();
  }

  publicLogin() {
    this.login(this.environment.dbPublicUser, this.environment.dbPublicPass, true).subscribe();
  }

  roleExists(role: string): boolean {
    return this.roleService.roleExists(role);
  }

  isAdmin(): boolean {
    return this.roleService.isAdmin();
  }

  private removeCredentials(): void {
    this.user_ = '';
    this.pass_ = '';
    this.isAuthenticated_ = false;
    this.roleService.roles = [''];
    Object.values(CurrentUser).forEach(key => {
      localStorage.removeItem(key);
    });
  }

  getAllRoles(): string[] {
    if (this.roleService.roles.length) return this.roleService.roles;
    return localStorage?.getItem(CurrentUser.roles).split(',') || [''];
  }

  get isPrivileged(): boolean {
    return this.roleService.roles.some((role: string) => {
      return this.idPrefixService.resolveIdPrefix(role) !== 'common:user';
    });
  }

  get user(): string {
    if (this.user_) return this.user_;
    return localStorage?.getItem(CurrentUser.name) || '';
  }

  set user(user: string) {
    this.user_ = user;
    localStorage?.getItem(user);
  }

  get pass(): string {
    if (this.user_) return this.pass_;
    return localStorage?.getItem(CurrentUser.pass) || '';
  }

  get isAuthenticated(): boolean {
    if (this.isAuthenticated_) return this.isAuthenticated_;
    return localStorage.getItem(CurrentUser.isLoggedIn) ? true : false;
  }

}
