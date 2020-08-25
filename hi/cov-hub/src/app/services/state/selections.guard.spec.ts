import { TestBed } from '@angular/core/testing';

import { SelectionsGuard } from './selections.guard';

describe('SelectionsGuard', () => {
  let guard: SelectionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
