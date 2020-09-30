import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../covhub/user.model';
import { ObservableStore } from '@codewithdan/observable-store';
import { defaultConf } from '../store.conf';

@Injectable({
  providedIn: 'root'
})
export class HistoryUsersService extends ObservableStore<User> {

  constructor(protected users: BehaviorSubject<User>) { super(defaultConf); }
}
