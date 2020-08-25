import { TestBed } from '@angular/core/testing';

import { HgraphApiService } from './hgraph-api.service';

describe('HgraphApiService', () => {
  let service: HgraphApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HgraphApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
