export interface SideEffect<T> {
 action: () => null;
 type: T;
}

export enum Auth {
  login,
  roleChange,
  logout
}

export enum File {
  select,
  review,
  upload
}

export enum Form {
  select,
  input,
  complete
}

export interface Hist {
  topic: string;
  actions: Array<() => null>;
  effects: Array<SideEffect<unknown>>;
}
