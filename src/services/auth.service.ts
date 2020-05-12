import axios, { AxiosError, AxiosResponse } from 'axios';
import jwt from 'jsonwebtoken';
import motherLogger from '../logger';
import { Env } from '../models/env.model';
import { BasicAuth } from '../models/response.model';

export class AuthService {
  
  private readonly logger = motherLogger.child({ file: 'AuthService' });
  
  private readonly dbHost: string;
  // private readonly dbUser: string;
  // private readonly dbPass: string;
  
  private readonly algorithm = 'HS256';
  private readonly expiresIn = '60m';
  
  private readonly secret: string;
  private authUrl: string;
  
  private static instance: AuthService;
  
  constructor() {
    this.secret = process.env[Env.jwtSec] || '';
    this.dbHost = process.env[Env.dbHost] || '';
    this.authUrl = `${this.dbHost}/_session`;
    this.logger.info("AuthService -> constructor -> dbHost", this.dbHost)
    // this.dbUser = express.application.get(Env.dbUser);
    // this.dbPass = express.application.get(Env.dbPass);
    
    if (!AuthService.instance) {
      AuthService.instance = this;
    }
    return AuthService.instance;
  }
  
  private generateToken(authResponse: BasicAuth.Success) {
    const { name, roles } = authResponse.userCtx;
    const algorithm = this.algorithm;
    const expiresIn = this.expiresIn;
    const token = jwt.sign({ name, roles }, this.secret, { algorithm, expiresIn });
    const payload = jwt.decode(token);
    return { token, payload };
  }
  
  async cookieAuth(username: string, password: string) {
    this.logger.debug("AuthService -> cookieAuth -> username, password", username, password);
    try {
      const cookieAuthResponse = await axios.post(this.authUrl, `name=${username}&password=${password}`);
      return { proxyCookie: cookieAuthResponse.headers['set-cookie'][0], ...cookieAuthResponse.data };
    } catch (error) {
      throw error;
    }
  }
  
  async jwtAuth(username: string, password: string) {
    this.logger.debug("AuthService -> jwtAuth -> username, password", username, password);
    try {
      const basicAuthResponse = await this.basicAuth(username, password) as AxiosResponse<BasicAuth.Success>;
      return this.generateToken(basicAuthResponse.data);
    } catch(error) {
      throw error;
    }
  }
  
  async basicAuth(username: string, password: string): Promise<AxiosResponse<BasicAuth.Response>> {
    this.logger.debug("AuthService -> basicAuth -> username, password", username, password);
    try {
      const response = await axios.get(this.authUrl, { 
        headers: { 
          Accept: 'application/json', 
        },
        auth: {
          username,
          password
        }
      })
      return response;
    } catch (error) { 
      if (error && error.response) {
        throw error as AxiosError<BasicAuth.Failure>;
      }
      throw error;
    }
  }
}