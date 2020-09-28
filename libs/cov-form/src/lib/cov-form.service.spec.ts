import { TestBed } from '@angular/core/testing';

import { CovFormService } from './cov-form.service';

describe('CovFormService', () => {
  let service: CovFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
