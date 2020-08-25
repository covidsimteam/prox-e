import { TestBed } from '@angular/core/testing';

import { IdPrefixService } from './id-prefix.service';

describe('IdPrefixService', () => {
  let service: IdPrefixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdPrefixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
