import { TestBed } from '@angular/core/testing';

import { SchedGuard } from './sched.guard';

describe('SchedGuard', () => {
  let guard: SchedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
