import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AbstractBusService } from './abstract-bus.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllFromNowService<T> extends AbstractBusService<T> {

  sub = new Subject<T>();
  emitter = new EventEmitter<T>();

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
