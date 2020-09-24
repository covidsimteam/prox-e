import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { Ledger } from './covhub/ledger.model';
import { defaultConf } from './store.conf';
import { HistoryService } from './history.service';
import { SideEffect, Hist } from '../impure/effect.model';


@Injectable({
  providedIn: 'root'
})
export class LedgerService extends ObservableStore<Ledger> {

  constructor(
    protected history: HistoryService
  ) {
    super(defaultConf);
  }

  updateHistory(delta: SideEffect<Hist>) { this.history.update(delta); }

  prePersistHistory(distilled: SideEffect<Hist>) { this.history.process(distilled); }

  persistHistory(payload: SideEffect<Hist>) { this.history.persist(payload); }
}
