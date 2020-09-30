import { TestBed } from '@angular/core/testing';

import { HistoryUsersService } from './history-users.service';

describe('HistoryUsersService', () => {
  let service: HistoryUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
