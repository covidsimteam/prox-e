import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSoFarService<T> {

  public sub = new ReplaySubject<T>();

  constructor() { }
}
