import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractBusService<T> {

  constructor() { }

  abstract emit(event: T): any;
}
