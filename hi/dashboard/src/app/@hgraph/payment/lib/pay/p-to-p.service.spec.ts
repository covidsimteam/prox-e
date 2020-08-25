import { TestBed } from '@angular/core/testing';

import { PToPService } from './p-to-p.service';

describe('PToPService', () => {
  let service: PToPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PToPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
