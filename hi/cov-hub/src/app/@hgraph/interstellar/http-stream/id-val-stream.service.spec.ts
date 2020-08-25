import { TestBed } from '@angular/core/testing';

import { IdValStreamService } from './id-val-stream.service';

describe('IdValStreamService', () => {
  let service: IdValStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdValStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
