import { TestBed } from '@angular/core/testing';

import { NebAuthService } from './neb-auth.service';

describe('NebAuthService', () => {
  let service: NebAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
