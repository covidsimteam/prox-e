import { Injectable } from '@angular/core';
import { Form } from '../covhub/forms.model';
import { BehaviorSubject } from 'rxjs';
import { ObservableStore } from '@codewithdan/observable-store';
import { defaultConf } from '../store.conf';

@Injectable({
  providedIn: 'root'
})
export class HistoryFormsService extends ObservableStore<Form> {

  constructor(protected forms: BehaviorSubject<Form>) { super(defaultConf); }
}
