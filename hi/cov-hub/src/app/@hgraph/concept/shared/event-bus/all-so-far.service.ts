import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSoFarService {

  public sub = new ReplaySubject

  constructor() { }
}
