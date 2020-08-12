import { TestBed } from '@angular/core/testing';

import { RxPouchService } from './rx-pouch.service';

describe('RxPouchService', () => {
  let service: RxPouchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxPouchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
