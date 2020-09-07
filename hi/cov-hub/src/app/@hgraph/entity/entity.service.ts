import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ValueStream = Observable<any | unknown>;
@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private values: ValueStream;

  constructor() { }

  get val(): ValueStream { return this.values; }
  set val(headers: ValueStream) { this.values = headers; }
}
