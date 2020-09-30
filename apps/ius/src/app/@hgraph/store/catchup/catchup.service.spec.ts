import { TestBed } from '@angular/core/testing';

import { CatchupService } from './catchup.service';

describe('CatchupService', () => {
  let service: CatchupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatchupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
