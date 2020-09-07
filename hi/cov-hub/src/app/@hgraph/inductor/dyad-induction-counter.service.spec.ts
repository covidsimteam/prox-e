import { TestBed } from '@angular/core/testing';

import { DyadInductionCounterService } from './dyad-induction-counter.service';

describe('DyadInductionCounterService', () => {
  let service: DyadInductionCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DyadInductionCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
