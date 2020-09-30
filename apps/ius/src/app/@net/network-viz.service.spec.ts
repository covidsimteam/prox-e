import { TestBed } from '@angular/core/testing';

import { NetworkVizService } from './network-viz.service';

describe('NetworkVizService', () => {
  let service: NetworkVizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkVizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
