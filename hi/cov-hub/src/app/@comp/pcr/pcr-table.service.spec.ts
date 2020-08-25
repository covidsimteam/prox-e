import { TestBed } from '@angular/core/testing';

import { PcrTableService } from './pcr-table.service';

describe('PcrTableService', () => {
  let service: PcrTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcrTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
