import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthResult, NbAuthService, NbAuthToken, NbPasswordAuthStrategy, NbTokenService } from '@nebular/auth';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BasicAuth } from '../../@models/auth-response.model';
import { CurrentUser } from '../../@models/domain.model';
import { HubUser, isHubUser } from '../../@models/user.model';
import { EnvironmentService } from '../../services/env/environment.service';
import { IdPrefixService } from '../../services/utils/id-prefix.service';
import { AuthToken } from '../access/token.model';
import { RolesService } from '../roles/roles.service';
import { AuthResult } from './auth-result.model';
import { PasswordAuthStrategyOptions } from './password-auth-strategy-options';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends NbAuthService {
  private user_: string;
  private pass_: string;
  private strat: NbPasswordAuthStrategy;

  private userSub: BehaviorSubject<HubUser> = new BehaviorSubject<HubUser>(JSON.parse(localStorage.getItem('user')));
  private authenticatedSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isInPublicModSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RolesService,
    private idPrefixService: IdPrefixService,
    protected tokenService: NbTokenService,
    private strategy: NbPasswordAuthStrategy) {
    super(tokenService, strategy);
    this.strat = new NbPasswordAuthStrategy(http, route);
  }

  /**
  * @param username CouchDB username
  * @param password CouchDB password
  * @param publicMode Whether to use default public login
  * It is used to decide whether to reuse the credentials
  * given the Couch user has the role claimed in the login request.
  */
  login(
    username: string,
    password: string
  ): Observable<BasicAuth.Response> {
    return this.basicAuthRequest(username, password);
  }

  publicLogin() {
    this.isInPublicMode = true;
    this.login(this.environment.dbPublicUser, this.environment.dbPublicPass).subscribe();
  }

  signUp(username: string, password: string): Observable<BasicAuth.Response> {
    return this.basicAuthRequest(username, password); // TODO change to actual sign-up later
  }

  get isInPublicMode(): boolean { return this.isInPublicModSub.value; }
  set isInPublicMode(v: boolean) { this.isInPublicModSub.next(v); }

  get strategies(): any { return [this.strat]; }
  set strategies(strats: any) { this.strat = strats[0]; }

  get getStrategyOptions(): PasswordAuthStrategyOptions { return new PasswordAuthStrategyOptions(); }

  private async roleArraySetter(roles: string[]) {
    this.roleService.roles = roles;
  }

  private refreshCurrentUserCredentials(
    isAuthenticated: boolean,
    user: string,
    pass: string,
    roles: string[]) {
    if (isAuthenticated && !this.isInPublicMode) {
      this.setCredentials(user, pass, roles);
      this.roleArraySetter(roles);
    } else {
      this.removeCredentials();
    }
  }

  private setCredentials(
    username: string,
    password: string,
    roles: string[]): void {
    this.user_ = username;
    this.pass_ = password;

    const user: HubUser = {
      username,
      password,
      roles
    };

    this.saveToken(user);
    this.isInPublicMode = false;
    this.authenticatedSub.next(true);
    this.userSub.next(user);

  }

  refreshToken(_: string = 'email', data?: any): Observable<NbAuthResult> {
    if (isHubUser(data)) {
      this.saveToken(data);
    } else {
      this.saveToken(this.userSub.getValue());
    }
    const authRes = new AuthResult(
      true,
      this.getCurrentToken(),
      null,
      '201',
      null,
      'Success');
    return from([authRes]);
  }

  private readonly autoken = (user: HubUser) => `token:${user}`;

  saveToken(user: HubUser) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('email', this.autoken(user));
  }

  getCurrentToken(): AuthToken {
    const token = new AuthToken();
    token.payload = this.autoken(this.userSub.getValue());
    return token;
  }

  getToken(): Observable<NbAuthToken> {
    return from([this.getCurrentToken()]);
  }

  logout(strategy: string = 'email'): Observable<NbAuthResult> {
    this.removeCredentials();
    this.router.navigate(['/hub/home']);
    this.publicLogin();
    return from([new NbAuthResult(
      true,
      '201: Log out succeeded.',
      null,
      null,
      `Log out succeeded: ${strategy}`,
      null)]);
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
    this.userSub.next(null);
    this.authenticatedSub.next(false);
    this.isInPublicModSub.next(true);
    this.roleArraySetter(['']);
    localStorage.removeItem('user');
  }

  getAllRoles(): string[] {
    if (this.roleService.roles.length) return this.roleService.roles;
    return localStorage?.getItem(CurrentUser.roles).split(',') || [''];
  }

  setAllRoles(roles: string[]) {
    this.roleService.roles = roles; // TODO  add role validation
  }

  get isPrivileged(): boolean {
    return this.roleService.roles.some((role: string) => {
      return IdPrefixService.toColonHyphen(role) !== 'common:user';
    });
  }

  get userObs(): Observable<HubUser> {
    return this.userSub.asObservable();
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

  private authenticateNow(success: boolean = true): Observable<boolean> {
    this.authenticatedSub.next(success);
    return this.authenticatedSub.asObservable();
  }

  get authentication(): Observable<boolean> {
    return this.authenticatedSub.asObservable();
  }

  set authSuccess(succ: boolean) {
    this.authenticatedSub.next(succ);
  }
  /**
  * @param username CouchDB username
  * @param password CouchDB password
  */
  basicAuthRequest(
    username: string,
    password: string,
  ) {
    const base64AuthString = btoa(`${username}:${password}`);
    return this.http.get<BasicAuth.Response>(this.environment.authUri, {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${base64AuthString}`,
      },
    }).pipe(
      tap((response: BasicAuth.Response) => {
        if (BasicAuth.isSuccess(response)) {
          this.refreshCurrentUserCredentials(
            true,
            username,
            password,
            response.userCtx.roles
          );
          this.roleService.roles = response.userCtx.roles;
          this.authSuccess = true;
        }
      }));
  }

}


