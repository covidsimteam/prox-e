import { DBErrorResponse } from './db/response.model';

export interface DBAuthResponse {
  proxyCookie?: string;
  ok: boolean;
  name: string;
  roles: string[];
}

export interface UserCtx {
  name: string;
  roles: string[];
}

export module BasicAuth {

  export interface Info {
      authentication_handlers: string[];
      authenticated: string;
  }

  export interface Success {
      ok: boolean;
      userCtx: UserCtx;
      info: Info;
  }

  export type Failure = DBErrorResponse;

  export type Response = Success | Failure;

  export function isSuccess(response: Response): response is Success {
    return 'ok' in response;
  }

}

