import { TestBed } from '@angular/core/testing';

import { IndivService } from './indiv.service';

describe('IndivService', () => {
  let service: IndivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
