import { TestBed } from '@angular/core/testing';

import { CAService } from './c-a.service';

describe('CAService', () => {
  let service: CAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
