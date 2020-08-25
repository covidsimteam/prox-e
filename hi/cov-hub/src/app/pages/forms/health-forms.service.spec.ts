import { TestBed } from '@angular/core/testing';

import { HealthFormsService } from './health-forms.service';

describe('HealthFormsService', () => {
  let service: HealthFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
