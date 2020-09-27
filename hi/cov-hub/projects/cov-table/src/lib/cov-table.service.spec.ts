import { TestBed } from '@angular/core/testing';

import { CovTableService } from './cov-table.service';

describe('CovTableService', () => {
  let service: CovTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
