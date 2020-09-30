import { TestBed } from '@angular/core/testing';

import { HistoryFilesService } from './history-files.service';

describe('HistoryFilesService', () => {
  let service: HistoryFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
