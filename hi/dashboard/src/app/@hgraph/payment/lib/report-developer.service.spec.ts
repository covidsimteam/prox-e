import { TestBed } from '@angular/core/testing';

import { ReportDeveloperService } from './report-developer.service';

describe('ReportDeveloperService', () => {
  let service: ReportDeveloperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportDeveloperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
