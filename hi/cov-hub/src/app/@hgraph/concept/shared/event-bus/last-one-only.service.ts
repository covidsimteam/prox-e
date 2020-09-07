import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastOneOnlyService {

  public sub = new AsyncSubject();

  constructor() { }
}
