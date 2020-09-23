import { TestBed } from '@angular/core/testing';

import { LastOneOnlyService } from './last-one-only.service';

describe('LastOneOnlyService', () => {
  let service: LastOneOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastOneOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
