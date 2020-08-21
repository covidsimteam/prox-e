export interface CreateDirSuccess {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateDirFailure extends Error {
    name: 'session' | 'confict' | 'connection';
    message: string;
    stack?: string;
}

export type CreateDirResponse = CreateDirFailure | CreateDirSuccess;