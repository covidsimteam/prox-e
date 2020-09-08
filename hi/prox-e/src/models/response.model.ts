export interface CouchError {
  error: string;
  reason: string;
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

  export interface Failure {
    error: 'unauthorized';
    reason: string;
  }

  export type Response = Success | Failure;

}


export module JWTAuth {

  export interface Info {
      authenticated: string;
      authentication_db: string;
      authentication_handlers: string[];
  }

  export interface Success {
      info: Info;
      ok: boolean;
      userCtx: UserCtx;
  }

}

