import { TestBed } from '@angular/core/testing';

import { ReportResearcherService } from './report-researcher.service';

describe('ReportResearcherService', () => {
  let service: ReportResearcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportResearcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
