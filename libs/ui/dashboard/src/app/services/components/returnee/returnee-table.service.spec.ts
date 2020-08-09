import { TestBed } from '@angular/core/testing';

import { ReturneeTableService } from './returnee-table.service';

describe('ReturneeTableService', () => {
  let service: ReturneeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturneeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
