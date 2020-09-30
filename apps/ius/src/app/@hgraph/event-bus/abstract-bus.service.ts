import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractBusService<T> {
  emitter = new EventEmitter<T>();
  constructor() { }

  abstract emit(event: T): any;
}
