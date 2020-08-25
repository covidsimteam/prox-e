export type UntypedTuple = {}[];

export interface IdentifiableObject {
  id: string;
  label: string;
}

export type Quat = number | BigInteger;

export interface Quaternion {
  time: Date;
  first: Quat;
  second: Quat;
  third: Quat;
}
