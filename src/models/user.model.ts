export interface Credentials {
  username: string;
  password: string;
}

export type User = Credentials;

export enum CovAuthOption {
  signUp = 'signUp',
  signIn = 'signIn',
  signOut = 'signOut'
}