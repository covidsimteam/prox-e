import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastOneOnlyService<T> {

  public sub = new AsyncSubject<T>();

  constructor() { }
}
