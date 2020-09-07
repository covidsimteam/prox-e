import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AbstractBusService } from './abstract-bus.service';

@Injectable({
  providedIn: 'root'
})
export class AllFromNowService<T> extends AbstractBusService<T> {

  public sub = new Subject<T>();

  constructor() {
    super();
  }

  emit(event: T) {
    this.sub.next(event);
  }

}
