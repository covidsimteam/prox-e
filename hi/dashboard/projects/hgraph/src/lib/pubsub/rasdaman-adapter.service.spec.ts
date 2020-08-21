import { TestBed } from '@angular/core/testing';

import { RasdamanAdapterService } from './rasdaman-adapter.service';

describe('RasdamanAdapterService', () => {
  let service: RasdamanAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RasdamanAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
