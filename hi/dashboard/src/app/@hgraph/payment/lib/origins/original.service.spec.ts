import { TestBed } from '@angular/core/testing';

import { OriginalService } from './original.service';

describe('OriginalService', () => {
  let service: OriginalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OriginalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
