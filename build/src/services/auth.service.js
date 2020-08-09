"use strict";
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
exports.AuthService = void 0;
const axios_1 = __importDefault(require("axios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = __importDefault(require("../logger"));
const env_model_1 = require("../models/env.model");
class AuthService {
    constructor() {
        this.logger = logger_1.default.child({ file: 'AuthService' });
        // private readonly dbUser: string;
        // private readonly dbPass: string;
        this.algorithm = 'HS256';
        this.expiresIn = '60m';
        this.secret = process.env[env_model_1.Env.jwtSec] || '';
        this.dbHost = process.env[env_model_1.Env.dbHost] || '';
        this.authUrl = `${this.dbHost}/_session`;
        this.logger.info("AuthService -> constructor -> dbHost", this.dbHost);
        // this.dbUser = express.application.get(Env.dbUser);
        // this.dbPass = express.application.get(Env.dbPass);
        if (!AuthService.instance) {
            AuthService.instance = this;
        }
        return AuthService.instance;
    }
    generateToken(authResponse) {
        const { name, roles } = authResponse.userCtx;
        const algorithm = this.algorithm;
        const expiresIn = this.expiresIn;
        const token = jsonwebtoken_1.default.sign({ name, roles }, this.secret, { algorithm, expiresIn });
        const payload = jsonwebtoken_1.default.decode(token);
        return { token, payload };
    }
    cookieAuth(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug("AuthService -> cookieAuth -> username, password", username, password);
            try {
                const cookieAuthResponse = yield axios_1.default.post(this.authUrl, `name=${username}&password=${password}`);
                return Object.assign({ proxyCookie: cookieAuthResponse.headers['set-cookie'][0] }, cookieAuthResponse.data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    jwtAuth(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug("AuthService -> jwtAuth -> username, password", username, password);
            try {
                const basicAuthResponse = yield this.basicAuth(username, password);
                return this.generateToken(basicAuthResponse.data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    basicAuth(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug("AuthService -> basicAuth -> username, password", username, password);
            try {
                const response = yield axios_1.default.get(this.authUrl, {
                    headers: {
                        Accept: 'application/json',
                    },
                    auth: {
                        username,
                        password
                    }
                });
                return response;
            }
            catch (error) {
                if (error && error.response) {
                    throw error;
                }
                throw error;
            }
        });
    }
}
exports.AuthService = AuthService;
