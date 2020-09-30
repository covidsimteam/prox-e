export interface SignUpSuccess {
    id: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface SignUpFailure extends Error {
    name: 'session' | 'confict' | 'connection';
    message: string;
    stack?: string;
}

export type SignUpResponse = SignUpFailure | SignUpSuccess;
