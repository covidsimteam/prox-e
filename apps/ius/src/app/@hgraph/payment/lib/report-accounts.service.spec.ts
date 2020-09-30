import { TestBed } from '@angular/core/testing';

import { ReportAccountsService } from './report-accounts.service';

describe('ReportAccountsService', () => {
  let service: ReportAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
