import { TestBed } from '@angular/core/testing';

import { HistoryStepsService } from './history-steps.service';

describe('HistoryStepsService', () => {
  let service: HistoryStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
