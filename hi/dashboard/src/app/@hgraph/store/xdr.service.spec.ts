import { TestBed } from '@angular/core/testing';

import { XdrService } from './xdr.service';

describe('XdrService', () => {
  let service: XdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
