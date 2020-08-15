import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthResult, NbAuthService, NbPasswordAuthStrategy, NbTokenService } from '@nebular/auth';
import { RolesService } from 'app/auth/roles/roles.service';
import { EnvironmentService } from 'app/services/env/environment.service';
import { IdPrefixService } from 'app/services/utils/id-prefix.service';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BasicAuth } from '../../models/auth-response.model';
import { CurrentUser } from '../../models/domain.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends NbAuthService {
  private user_: string;
  private pass_: string;
  private authArr: string[] = [''];
  private isInPublicMod: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private authenticatedSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private strat: NbPasswordAuthStrategy;

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService,
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RolesService,
    private idPrefixService: IdPrefixService,
    protected tokenService: NbTokenService,
    private strategy: NbPasswordAuthStrategy
    ) {
      super(tokenService, strategy);
      this.strat = new NbPasswordAuthStrategy(http, route);
    }

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

      signUp(
        username: string,
        password: string,
        ): Observable<BasicAuth.Response> {
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
                      this.roleService.roles = response.userCtx.roles;
                      this.authSuccess = true;
                    }
                  }
                }),
                );
              }

              get isInPublicMode(): boolean { return this.isInPublicMod.value; }
              set isInPublicMode(v: boolean) { this.isInPublicMod.next(v); }

              get strategies(): any { return [this.strat]; }
              set strategies(strats: any) { this.strat = strats[0]; }
              get auth(): string[] { return this.authArr.slice(); }

              private async roleArraySetter(roles: string[]) {
                this.roleService.roles = roles;
                this.authArr = this.idPrefixService.resolveIdPrefixes(roles);
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
                    this.authenticatedSub.next(true);

                    Object.entries({ username, password, ...roles, isLoggedIn: 'true' })
                    .forEach(
                      ([key, val]) => {
                        localStorage.setItem(key, val.toString());
                      },
                      );
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
                        this.authenticatedSub.next(false);
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
                          return IdPrefixService.toColonHyphen(role) !== 'common:user';
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

                    }
