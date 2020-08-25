import { TestBed } from '@angular/core/testing';

import { RippleService } from './ripple.service';

describe('RippleService', () => {
  let service: RippleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RippleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
