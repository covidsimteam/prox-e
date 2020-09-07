export interface ResetPassSuccess {
  id: string;
  type: 'passwordreset';
  createdAt: Date;
  updatedAt: Date;
}

export interface ResetPassFailure extends Error {
  name: 'invalid' | 'not-found' | 'connection';
  message: string;
  stack?: string;
}

export type ResetPassResponse = ResetPassFailure | ResetPassSuccess;
