import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { Ledger } from '../covhub/ledger.model';
import { HistoryService } from '../history/history.service';
import { CovDocument, SideEffect } from '../state/impure/effect.model';
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

  update(delta: SideEffect<CovDocument>, payload: unknown) {
    this.history.update<CovDocument>(delta, payload);
  }

  prePersist(distilled: SideEffect<CovDocument>, payload: unknown) {
    this.history.process<CovDocument>(distilled, payload);
  }

  persist(payload: SideEffect<CovDocument>) {
    this.history.persist<CovDocument>(payload, payload);
  }
}
