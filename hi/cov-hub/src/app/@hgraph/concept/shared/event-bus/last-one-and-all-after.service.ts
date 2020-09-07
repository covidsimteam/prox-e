import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractBusService } from './abstract-bus.service';

@Injectable({
  providedIn: 'root'
})
export class LastOneAndAllAfterService<T> extends AbstractBusService<T>  {

  public sub = new BehaviorSubject<T>(null);

  constructor() {
    super();
  }

  emit(event: T) {
    this.sub.next(event);
  }

}
