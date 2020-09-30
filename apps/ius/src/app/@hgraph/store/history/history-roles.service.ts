import { Injectable } from '@angular/core';
import { Role } from '../covhub/roles.model';
import { BehaviorSubject } from 'rxjs';
import { ObservableStore } from '@codewithdan/observable-store';
import { defaultConf } from '../store.conf';

@Injectable({
  providedIn: 'root'
})
export class HistoryRolesService extends ObservableStore<Role> {

  constructor(protected steps: BehaviorSubject<Role>) { super(defaultConf); }
}
