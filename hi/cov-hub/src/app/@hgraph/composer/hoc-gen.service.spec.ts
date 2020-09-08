import { TestBed } from '@angular/core/testing';

import { HocGenService } from './hoc-gen.service';

describe('HocGenService', () => {
  let service: HocGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HocGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
