import { TestBed } from '@angular/core/testing';

import { NetworkVizGuard } from './network-viz.guard';

describe('NetworkVizGuard', () => {
  let guard: NetworkVizGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NetworkVizGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
