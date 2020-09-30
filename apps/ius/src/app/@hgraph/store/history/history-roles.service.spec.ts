import { TestBed } from '@angular/core/testing';

import { HistoryRolesService } from './history-roles.service';

describe('HistoryRolesService', () => {
  let service: HistoryRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
