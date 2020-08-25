import { TestBed } from '@angular/core/testing';

import { InvariantService } from './invariant.service';

describe('InvariantService', () => {
  let service: InvariantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvariantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
