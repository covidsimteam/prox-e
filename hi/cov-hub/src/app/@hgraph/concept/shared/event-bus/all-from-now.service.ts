import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllFromNowService<T> {

  public sub = new Subject<T>();

  constructor() { }
}
