import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, from } from 'rxjs';
import { NewAbilityService } from './new-ability.service';
import { AuthService } from '../@auth/core/auth.service';
import { HubUser } from '../@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  private userHub: HubUser;

  constructor(
    private newable: NewAbilityService,
    private auth: AuthService
  ) {
    this.userHub = auth.userObs?.getValue();
  }


  // Set or return a new HubUser
  user(user: HubUser | null): Observable<HubUser> {
    if (name) {
      this.userHub = user;
      this.auth.login(user.username, user.password);
    }
    return this.auth.userObs;
  }

  searchCriteria<T>(): BehaviorSubject<T> {
    return new BehaviorSubject(null);
  }

  updateSearchCriteria() {
    // TODO use a debounced typeahead event based emitter in search service
    return new ReplaySubject<unknown>(100);
  }

  updatePagination() {
    // TODO use a touch/click/keyboard-prev/next event based emitter in tabular service
    return new BehaviorSubject(null);
  }

  updateZoomRegion() {
    // TODO use a zoom event based emitter in map service
    return new BehaviorSubject(null);
  }

  getActiveRoles(): Observable<string> {
    return from(this.auth.getAllRoles());
  }
}
