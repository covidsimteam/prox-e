import { TestBed } from '@angular/core/testing';

import { CovScheduleService } from './cov-schedule.service';

describe('CovScheduleService', () => {
  let service: CovScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
