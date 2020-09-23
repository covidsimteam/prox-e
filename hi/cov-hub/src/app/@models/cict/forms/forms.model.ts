
export interface NepaliDate {
  date: Date;
  mixEngNep: boolean;
}

export interface MultiNamed {
  commonNames: string[];
}

// TODO create union types
export type District = MultiNamed;
export type Municipality = MultiNamed;
export type Ward = MultiNamed;
export type Tole = MultiNamed;

export interface MatchA<T> {
  referredNames: string[];
  officialName: (collection: T) => string;
}
