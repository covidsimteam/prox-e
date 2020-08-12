import { SignInFailure } from "./sign-in.model";

export interface SignOutSuccess {
    account: {
        id: string;
        username: string;
        createdAt: Date;
        updateAt: Date;
        profile: {
            fullname: string;
        }
    }
}

export interface SignOutFailure extends SignInFailure {
    name: 'session' | 'confict' | 'connection';
    type:  'unconfirmed' | 'unauthorized' | 'unknown';
    hook: 'before:signout';
    message: string; 
    stack?: string;
}

export type SignOutResponse = SignOutFailure | SignOutSuccess;