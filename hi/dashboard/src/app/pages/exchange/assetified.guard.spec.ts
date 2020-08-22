import { TestBed } from '@angular/core/testing';

import { AssetifiedGuard } from './assetified.guard';

describe('AssetifiedGuard', () => {
  let guard: AssetifiedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AssetifiedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
