import { TestBed } from '@angular/core/testing';

import { HistoryFormsService } from './history-forms.service';

describe('HistoryFormsService', () => {
  let service: HistoryFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
