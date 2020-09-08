import { TestBed } from '@angular/core/testing';

import { MgmtService } from './mgmt.service';

describe('MgmtService', () => {
  let service: MgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
