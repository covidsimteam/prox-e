import { TestBed } from '@angular/core/testing';

import { IdGuard } from './id.guard';

describe('IdGuard', () => {
  let guard: IdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
