import { TestBed } from '@angular/core/testing';

import { MemoryAdapterService } from './memory-adapter.service';

describe('MemoryAdapterService', () => {
  let service: MemoryAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
