import { TestBed } from '@angular/core/testing';

import { RedisAdapterService } from './redis-adapter.service';

describe('RedisAdapterService', () => {
  let service: RedisAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedisAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
