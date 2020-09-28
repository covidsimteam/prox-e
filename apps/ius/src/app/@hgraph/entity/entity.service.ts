import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ValueStream = Observable<unknown>;
@Injectable({
  providedIn: 'root'
})
export abstract class EntityService {

  private values: ValueStream;

  private valueSub = new BehaviorSubject<unknown>(null);
  valueUpdates$ = this.valueSub.asObservable();

  constructor() { }

  get val(): ValueStream { return this.values; }

  set val(headers: ValueStream) {
    this.values = headers;
    this.valueSub.next(headers);
  }

}
