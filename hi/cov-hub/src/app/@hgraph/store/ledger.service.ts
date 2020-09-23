import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { Ledger } from './covhub/ledger.model';
import { defaultConf } from './store.conf';


@Injectable({
  providedIn: 'root'
})
export class LedgerService extends ObservableStore<Ledger> {

  constructor() {
    super(defaultConf);
  }
}
