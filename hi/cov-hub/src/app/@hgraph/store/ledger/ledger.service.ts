import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { Ledger } from '../covhub/ledger.model';
import { HistoryService } from '../history/history.service';
import { Hist, SideEffect } from '../state/impure/effect.model';
import { defaultConf } from '../store.conf';

@Injectable({
  providedIn: 'root'
})
export class LedgerService extends ObservableStore<Ledger> {

  constructor(
    protected history: HistoryService
  ) {
    super(defaultConf);
  }

  update(delta: SideEffect<Hist>) { this.history.update(delta); }

  prePersist(distilled: SideEffect<Hist>) { this.history.process(distilled); }

  persist(payload: SideEffect<Hist>) { this.history.persist(payload); }
}
