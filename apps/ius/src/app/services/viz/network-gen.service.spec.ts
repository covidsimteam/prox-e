import { TestBed } from '@angular/core/testing';

import { NetworkGenService } from './network-gen.service';

describe('NetworkGenService', () => {
  let service: NetworkGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
