import { NbAuthResult } from '@nebular/auth';
import { AuthToken } from '../access/token.model';

export class AuthResult extends NbAuthResult {

  constructor(
    protected success: boolean,
    protected token: AuthToken,
    protected errors: any,
    protected response: any,
    protected redirect: any,
    protected messages: any) {
      super(true);
    }

  getResponse(): any {
    return '';
  }

  getToken(): AuthToken {
    return null;
  }

  getRedirect(): string {
    return '';
  }

  getErrors(): string[] {
    return [''];
  }

  getMessages(): string[] {
    return [''];
  }

  isSuccess(): boolean {
    return false;
  }

  isFailure(): boolean {
    return false;
  }
}
