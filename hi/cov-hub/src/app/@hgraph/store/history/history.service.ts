import { Injectable } from '@angular/core';
import { HistoryWorkService } from './history-work.service';

import { BehaviorSubject } from 'rxjs';
import { SideEffect, Hist } from '../state/impure/effect.model';
import { DatabaseService } from '../database/database.service';
import { Databases } from '../../../@models/domain.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  protected deltas = new BehaviorSubject<SideEffect<Hist>>(null);

  protected saveable = new BehaviorSubject<SideEffect<Hist>>(null);

  constructor(
    protected work: HistoryWorkService,
    private db: DatabaseService
  ) { }

  update(delta: SideEffect<Hist>) { this.deltas.next(delta); }

  process(delta: SideEffect<Hist>) { delta.action(); this.update(delta); }

  persist(delta: SideEffect<Hist>) {
    this.saveable.next(delta);
    this.process(delta);
    const now = (new Date()).getTime();
    this.db.addAll([{
      _id: `${delta?.type?.topic}_${now}`,
      ...delta
    }], Databases.history);
  }

}
