import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdStream } from '../../../identity/src/lib/identity.service';

export type EntityStream = IdStream;
export type Edx = Observable<IdStream | unknown>;
export type ValueStream = Observable<Edx>;
@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private idx: IdStream;
  private values: ValueStream;

  constructor() { }

  get id(): EntityStream { return this.idx; }

  set id(id: EntityStream) { this.idx = id; }

  get val(): ValueStream { return this.values; }
  set val(headers: ValueStream) { this.values = headers; }
}
