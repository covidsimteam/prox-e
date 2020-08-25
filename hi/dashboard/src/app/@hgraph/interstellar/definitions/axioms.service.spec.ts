import { TestBed } from '@angular/core/testing';

import { AxiomsService } from './axioms.service';

describe('AxiomsService', () => {
  let service: AxiomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
