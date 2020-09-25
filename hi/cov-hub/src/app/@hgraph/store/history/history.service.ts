import { Injectable } from '@angular/core';
import { HistoryWorkService } from './history-work.service';

import { BehaviorSubject } from 'rxjs';
import { SideEffect, CovDocument } from '../state/impure/effect.model';
import { DatabaseService } from '../database/database.service';
import { Databases } from '../../../@models/domain.model';

export type HistoryStream = [SideEffect<CovDocument>, unknown];
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  protected deltas = new BehaviorSubject<HistoryStream>(null);

  protected saveable = new BehaviorSubject<HistoryStream>(null);

  constructor(
    protected work: HistoryWorkService,
    private db: DatabaseService
  ) { }

  update<T extends CovDocument>(delta: SideEffect<T>, payload: unknown) {
    this.deltas.next([delta, payload]);
  }

  process<T extends CovDocument>(delta: SideEffect<T>, payload: unknown) {
    delta.action();
    this.update(delta, payload);
  }

  persist<T extends CovDocument>(delta: SideEffect<T>, payload: unknown) {
    this.saveable.next([delta, payload]);
    this.process(delta, payload);
    const now = (new Date()).getTime();
    this.db.addAll([{
      _id: `${delta?.type['topic']}_${now}`,
      ...delta
    }], Databases.history);
  }

}
