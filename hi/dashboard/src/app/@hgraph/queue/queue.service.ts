import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export type TemporalQueue = Observable<{}[]>;
@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private temporalQueue: TemporalQueue;

  constructor() { }

  set queue(queue: TemporalQueue) {
    this.temporalQueue = queue;
  }

  get queue(): TemporalQueue {
    return this.temporalQueue;
  }
}
