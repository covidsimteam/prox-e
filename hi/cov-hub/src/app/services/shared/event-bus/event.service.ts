import { Injectable } from '@angular/core';

export interface AbstractEvent {
  id: string;
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private event: AbstractEvent = {
    id: 'id',
    name: 'name',
    type: 'type'
  };
  constructor() { }

  currentEvent(): AbstractEvent {
    return this.event;
  }

  setId(id: string): EventService {
    this.id = id;
    return this;
  }

  setName(name: string): EventService {
    this.name = name;
    return this;
  }

  setType(type: string): EventService {
    this.type = type;
    return this;
  }

  set id(id: string) {
    this.event.id = id;
  }

  set name(name: string) {
    this.event.name = name;
  }

  set type(type: string) {
    this.event.type = type;
  }
}
