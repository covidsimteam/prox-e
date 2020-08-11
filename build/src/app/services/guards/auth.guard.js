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
exports.AuthGuard = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_1 = require("@nebular/auth");
const operators_1 = require("rxjs/operators");
let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(_, state) {
        if (this.authService.isAuthenticated)
            return this.authService.isAuthenticated()
                .pipe(operators_1.tap((authenticated) => {
                if (!authenticated) {
                    this.router.navigate(['auth/login']);
                }
            }));
        this.router.navigate(['auth/login'], {
            queryParams: {
                returnUrl: state.url,
            },
        });
        return false;
    }
};
AuthGuard = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        auth_1.NbAuthService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
