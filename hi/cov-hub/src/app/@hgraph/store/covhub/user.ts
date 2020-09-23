export interface Coordinates {
  xLat: number;
  yLng: number;
  zAlt: number;
  time: number;
}

export function makeCoordinates(
  input: {
    xLat: number,
    yLng: number,
    zAlt: number,
    time: number,
  }
): Coordinates {
  return {
    xLat: input.xLat,
    yLng: input.yLng,
    zAlt: input.zAlt,
    time: input.time,
  };
}


export interface Address {
  id: number;
  details: string[];
}

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
