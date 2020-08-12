import { TestBed } from '@angular/core/testing';

import { NebMatService } from './neb-mat.service';

describe('NebMatService', () => {
  let service: NebMatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebMatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
