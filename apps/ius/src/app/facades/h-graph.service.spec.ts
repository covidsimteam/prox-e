import { TestBed } from '@angular/core/testing';

import { HGraphService } from './h-graph.service';

describe('HGraphService', () => {
  let service: HGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
