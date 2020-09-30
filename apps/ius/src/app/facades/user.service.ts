import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, from } from 'rxjs';
import { NewAbilityService } from './new-ability.service';
import { AuthService } from '../@auth/core/auth.service';
import { HubUser } from '../@models/user.model';
import { NbSearchService } from '@nebular/theme';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  private userHub: HubUser;
  private readonly zoomFactor = new BehaviorSubject<number>(7);
  private readonly searchInput = new ReplaySubject<string>(7);

  // start page, end page, item-gaps per page
  private readonly pageNumber = new BehaviorSubject<[number, number, number]>([0, 1, 1]);

  constructor(
    private newable: NewAbilityService,
    private auth: AuthService,
    private search: NbSearchService,
  ) {
    this.userHub = auth.userObs?.getValue();
  }


  // Set or return a new HubUser
  user(user?: HubUser | null): Observable<HubUser> {
    if (user) {
      this.userHub = user;
      this.auth.login(user.username, user.password);
    }
    return this.auth.userObs;
  }

  updateSearchCriteria(term: string, tag: {}) {
    // TODO use a debounced typeahead event based emitter in search service,
    const searchCriteria = this.search.onSearchInput().pipe(
      map((inp: any) => this.searchInput.next(inp))
    );
  }

  updatePagination(first: number, last: number, gap: number) {
    // TODO use a touch/click/keyboard-prev/next event based emitter in tabular service
    this.pageNumber.next([first, last, gap]);
    return this.pageNumber.asObservable();
  }

  updateZoomRegion(zoomLevel: number) {
    // TODO use a zoom event based emitter in map service
    this.zoomFactor.next(zoomLevel);
    return this.zoomFactor.asObservable();
  }

  getActiveRoles(): Observable<string> {
    // TODO make this reactive
    return from(this.auth.getAllRoles());
  }
}
