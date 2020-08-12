import { Injectable } from '@angular/core';
import { CosmosStream } from '../model/model.stream';

@Injectable({
  providedIn: 'root'
})
export class InterstellarService {

  private cosmos: CosmosStream;

  constructor() { }

  set cosmo(cosmos: CosmosStream) { this.cosmos = cosmos; }

  get cosmo(): CosmosStream { return this.cosmos; }
}
