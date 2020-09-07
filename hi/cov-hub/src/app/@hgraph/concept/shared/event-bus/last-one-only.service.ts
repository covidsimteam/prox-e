import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
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
  }

}
