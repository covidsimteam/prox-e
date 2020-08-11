"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const auth_response_model_1 = require("../../models/auth-response.model");
const domain_model_1 = require("../../models/domain.model");
const environment_service_1 = require("../env/environment.service");
let AuthService = class AuthService {
    constructor(http, environment, router) {
        this.http = http;
        this.environment = environment;
        this.router = router;
        this.isAuthenticated_ = false;
        this.isPrivilegedUser = new rxjs_1.BehaviorSubject(false);
    }
    /**
     * @param username CouchDB username
     * @param password CouchDB password
     * @param role is not used for authorization request to CouchDB.
     * It is used to decide whether to reuse the credentials
     * given the Couch user has the role claimed in the login request.
     */
    login(username, password, role = 'public') {
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
    basicAuthRequest(username, password, role, refreshCredentials = false) {
        const base64AuthString = btoa(`${username}:${password}`);
        return this.http
            .get(this.environment.authUri, {
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${base64AuthString}`,
            },
        })
            .pipe(operators_1.tap((response) => {
            if (auth_response_model_1.BasicAuth.isSuccess(response)) {
                const successResponse = response;
                const roleIsMatching = successResponse.userCtx.roles.indexOf(role) !== -1;
                if (refreshCredentials && roleIsMatching) {
                    this.refreshCurrentUserCredentials(true, username, password, role);
                }
            }
        }));
    }
    refreshCurrentUserCredentials(isAuthenticated, user, pass, role) {
        this.isPrivilegedUser.next(role !== 'public'); // TODO add whitelisted roles
        if (isAuthenticated) {
            this.setCredentials(user, pass, role);
        }
        else {
            this.removeCredentials();
        }
    }
    setCredentials(username, password, role) {
        this.user_ = username;
        this.pass_ = password;
        this.isAuthenticated_ = true;
        this.role_ = role;
        Object.entries({ username, password, role, isLoggedIn: 'true' }).forEach(([key, val]) => {
            localStorage.setItem(key, val);
        });
    }
    logout() {
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
    removeCredentials() {
        this.user_ = '';
        this.pass_ = '';
        this.isAuthenticated_ = false;
        this.role_ = 'public';
        Object.values(domain_model_1.CurrentUser).forEach(key => {
            localStorage.removeItem(key);
        });
        this.isPrivilegedUser.next(false);
    }
    get role() {
        if (this.role_)
            return this.role_;
        return localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(domain_model_1.CurrentUser.role);
    }
    get isPrivileged() {
        return !!this.role && this.role !== 'public'; // TODO add whitelisted roles
    }
    get user() {
        if (this.user_)
            return this.user_;
        return (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(domain_model_1.CurrentUser.name)) || '';
    }
    get pass() {
        if (this.user_)
            return this.pass_;
        return (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(domain_model_1.CurrentUser.pass)) || '';
    }
    get isAuthenticated() {
        if (this.isAuthenticated_)
            return this.isAuthenticated_;
        return localStorage.getItem(domain_model_1.CurrentUser.isLoggedIn) ? true : false;
    }
};
AuthService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [http_1.HttpClient,
        environment_service_1.EnvironmentService,
        router_1.Router])
], AuthService);
exports.AuthService = AuthService;
