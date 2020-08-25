import { TestBed } from '@angular/core/testing';

import { IdTokenService } from './id-token.service';

describe('IdTokenService', () => {
  let service: IdTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
