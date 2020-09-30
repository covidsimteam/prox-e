import { Injectable } from '@angular/core';
import { CaseInformation } from '../covhub/cases.model';
import { BehaviorSubject } from 'rxjs';
import { ObservableStore } from '@codewithdan/observable-store';
import { defaultConf } from '../store.conf';

@Injectable({
  providedIn: 'root'
})
export class HistoryCasesService extends ObservableStore<CaseInformation> {

  constructor(protected cases: BehaviorSubject<CaseInformation>) { super(defaultConf); }
}
