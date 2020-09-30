import { Injectable } from '@angular/core';
import { NbCardComponent } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class EntityService<T extends NbCardComponent> {

  constructor(protected t: T) { }

  set card(card: T) {
    this.t = card;
  }

  get card(): T {
    return this.t;
  }
}
