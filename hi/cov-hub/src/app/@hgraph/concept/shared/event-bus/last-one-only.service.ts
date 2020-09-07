import { Injectable } from '@angular/core';
import { AsyncSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AbstractBusService } from './abstract-bus.service';

@Injectable({
  providedIn: 'root'
})
export class LastOneOnlyService<T> extends AbstractBusService<T>  {

  public sub = new AsyncSubject<T>();

  constructor() {
    super();
  }

  emit(event: T) {
    this.sub.next(event);
    this.emitter.emit(event);
  }

  on(event: T, actions: () => null): Subscription {
    return this.sub.pipe(
      filter((e: T) => e === event)
    ).subscribe(actions);
  }
}
