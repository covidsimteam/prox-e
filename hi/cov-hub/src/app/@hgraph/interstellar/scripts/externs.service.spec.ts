import { TestBed } from '@angular/core/testing';

import { ExternsService } from './externs.service';

describe('ExternsService', () => {
  let service: ExternsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
