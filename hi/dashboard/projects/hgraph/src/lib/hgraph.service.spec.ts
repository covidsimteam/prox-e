import { TestBed } from '@angular/core/testing';

import { HgraphService } from './hgraph.service';

describe('HgraphService', () => {
  let service: HgraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HgraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
