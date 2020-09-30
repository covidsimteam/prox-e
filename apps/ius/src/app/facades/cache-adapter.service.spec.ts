import { TestBed } from '@angular/core/testing';

import { CacheAdapterService } from './cache-adapter.service';

describe('CacheAdapterService', () => {
  let service: CacheAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
