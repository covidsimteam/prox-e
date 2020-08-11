export interface Credentials {
  username: string;
  password: string;
}

export type User = Credentials;

export enum CovAuthOption {
  signUp = 0,
  signIn = 1,
  signOut = -1
}