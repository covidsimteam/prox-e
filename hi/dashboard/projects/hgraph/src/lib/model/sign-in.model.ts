import { SignUpSuccess, SignUpFailure } from './sign-up.model';

export interface SignInSuccess extends SignUpSuccess {
    profile: {
        fullname: string
    };
}

export interface SignInFailure extends SignUpFailure {
    name: 'session' | 'confict' | 'connection';
    type:  'unconfirmed' | 'unauthorized' | 'unknown';
    message: string;
    stack?: string;
}

export type SignInResponse = SignInFailure | SignInSuccess;
