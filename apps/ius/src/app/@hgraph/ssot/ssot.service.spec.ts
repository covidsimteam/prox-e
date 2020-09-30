import { TestBed } from '@angular/core/testing';

import { SsotService } from './ssot.service';

describe('SsotService', () => {
  let service: SsotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
