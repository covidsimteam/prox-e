import { Injectable } from '@angular/core';
import { PcrData } from './map/district-pcr-data.model';

@Injectable({
  providedIn: 'root'
})
export class MapSeroService {

  data: PcrData;
  readonly type: [string, string] = ['sero', 'ratio'];

  constructor() { }
}
