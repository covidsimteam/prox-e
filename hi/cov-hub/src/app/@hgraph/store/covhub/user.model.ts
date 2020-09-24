export interface Address {
  id: number;
  details: string[];
}

export type AddressPatch = Partial<Address>;

export function makeAddress(
  input: {
    id: number,
    details: string[],
  }
): Address {
  return {
    id: input.id,
    details: input.details,
  };
}


export interface User {
  email: string;
  fullName: string;
  locations: {[key: string]: Coordinates};
  addresses: {[key: string]: Address};
}

export type UserPatch = Partial<User>;

export function makeUser(
  input: {
    email: string,
    fullName: string,
    locations: {[key: string]: Coordinates},
    addresses: {[key: string]: Address},
  }
): User {
  return {
    email: input.email,
    fullName: input.fullName,
    locations: input.locations,
    addresses: input.addresses,
  };
}
