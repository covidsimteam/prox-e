import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Step } from '../covhub/steps.model';
import { ObservableStore } from '@codewithdan/observable-store';
import { defaultConf } from '../store.conf';

@Injectable({
  providedIn: 'root'
})
export class HistoryStepsService extends ObservableStore<Step> {

  constructor(protected steps: BehaviorSubject<Step>) { super(defaultConf); }
}
