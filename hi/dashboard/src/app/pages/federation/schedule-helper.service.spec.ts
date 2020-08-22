import { TestBed } from '@angular/core/testing';

import { ScheduleHelperService } from './schedule-helper.service';

describe('ScheduleHelperService', () => {
  let service: ScheduleHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
