import { TestBed } from '@angular/core/testing';

import { DiabetesCornerGuard } from './diabetes-corner.guard';

describe('DiabetesCornerGuard', () => {
  let guard: DiabetesCornerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DiabetesCornerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
