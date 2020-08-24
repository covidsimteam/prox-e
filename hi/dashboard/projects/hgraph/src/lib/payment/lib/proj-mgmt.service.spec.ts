import { TestBed } from '@angular/core/testing';

import { ProjMgmtService } from './proj-mgmt.service';

describe('ProjMgmtService', () => {
  let service: ProjMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
