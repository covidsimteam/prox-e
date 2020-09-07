import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AbstractBusService } from './abstract-bus.service';
import { AbstractEvent } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class AllFromNowService<T extends AbstractEvent> extends AbstractBusService<T> {

  sub = new Subject<T>();

  constructor() {
    super();
  }

  emit(event: T) {
    this.sub.next(event);
    this.emitter.emit(event);
  }

  on(event: T, actions: () => null): Subscription {
    return this.sub.pipe(
      filter((e: T) => e.type === event.type)
    ).subscribe(actions);
  }
}

