import { TestBed } from '@angular/core/testing';

import { HgraphVisService } from './hgraph-vis.service';

describe('HgraphVisService', () => {
  let service: HgraphVisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HgraphVisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
