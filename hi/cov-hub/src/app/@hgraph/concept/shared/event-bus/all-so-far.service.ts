import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AbstractBusService } from './abstract-bus.service';

@Injectable({
  providedIn: 'root'
})
export class AllSoFarService<T> extends AbstractBusService<T>  {

  public sub = new ReplaySubject<T>();

  constructor() {
    super();
  }

  emit(event: T) {
    this.sub.next(event);
  }

}
