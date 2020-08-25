import { TestBed } from '@angular/core/testing';

import { HistoryWorkService } from './history-work.service';

describe('HistoryWorkService', () => {
  let service: HistoryWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
