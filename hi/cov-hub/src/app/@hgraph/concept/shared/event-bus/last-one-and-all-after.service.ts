import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastOneAndAllAfterService<T> {

  public sub = new BehaviorSubject<T>(null);

  constructor() { }
}
