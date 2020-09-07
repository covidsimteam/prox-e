import { TestBed } from '@angular/core/testing';

import { PipeComplianceService } from './pipe-compliance.service';

describe('PipeComplianceService', () => {
  let service: PipeComplianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeComplianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
