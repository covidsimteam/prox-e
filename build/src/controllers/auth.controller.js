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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
const tsoa_1 = require("tsoa");
const logger_1 = __importDefault(require("../logger"));
let AuthController = class AuthController extends tsoa_1.Controller {
    constructor() {
        super();
        this.logger = logger_1.default.child({ file: 'auth.controller' });
        this.authService = new auth_service_1.AuthService();
        this.logger.info("AuthController -> constructor -> authService", this.authService);
    }
    createJWT(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.setStatus(201);
                this.authService.jwtAuth(requestBody.username, requestBody.password);
            }
            catch (error) {
                this.setStatus(401);
            }
        });
    }
    createCookie(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.setStatus(201);
                this.authService.cookieAuth(requestBody.username, requestBody.password);
            }
            catch (error) {
                this.setStatus(401);
            }
        });
    }
};
__decorate([
    tsoa_1.Tags('Auth'),
    tsoa_1.SuccessResponse("201", "Token Created"),
    tsoa_1.Response(401, "Authentication Failed"),
    tsoa_1.Post('jwt'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createJWT", null);
__decorate([
    tsoa_1.Tags('Auth'),
    tsoa_1.SuccessResponse("201", "AuthSession Cookie Created"),
    tsoa_1.Response(401, "Authentication Failed"),
    tsoa_1.Post('cookie'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createCookie", null);
AuthController = __decorate([
    tsoa_1.Route('auth'),
    __metadata("design:paramtypes", [])
], AuthController);
exports.AuthController = AuthController;
