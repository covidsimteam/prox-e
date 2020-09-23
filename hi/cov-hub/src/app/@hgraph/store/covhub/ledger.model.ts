import { CartesianCoords } from '../../../@models/core/coord.model';

export interface Ledger {
  coordinatesGrid?: Coordinates[];
  timeSpaceGrid: CartesianCoords[];
  eventNameGrid: string[];
  eventPayloadGrid: unknown[];
  id: string;
}
