import { TestBed } from '@angular/core/testing';

import { MedAiAuthGuard } from './med-ai-auth.guard';

describe('MedAiAuthGuard', () => {
  let guard: MedAiAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedAiAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
