import { TestBed } from '@angular/core/testing';

import { HistoryCasesService } from './history-cases.service';

describe('HistoryCasesService', () => {
  let service: HistoryCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
