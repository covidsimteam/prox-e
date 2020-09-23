import { TestBed } from '@angular/core/testing';

import { LastOneAndAllAfterService } from './last-one-and-all-after.service';

describe('LastOneAndAllAfterService', () => {
  let service: LastOneAndAllAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastOneAndAllAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
