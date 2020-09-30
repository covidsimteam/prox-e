import { TestBed } from '@angular/core/testing';

import { PositivesService } from './positives.service';

describe('PositivesService', () => {
  let service: PositivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
