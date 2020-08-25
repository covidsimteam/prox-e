import { TestBed } from '@angular/core/testing';

import { DistService } from './dist.service';

describe('DistService', () => {
  let service: DistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
