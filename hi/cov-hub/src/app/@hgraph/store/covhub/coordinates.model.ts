export interface Coordinates {
  xLat: number;
  yLng: number;
  zAlt: number;
  time: number;
}

export type CoordinatesPatch = Partial<Coordinates>;

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
