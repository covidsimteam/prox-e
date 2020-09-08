import { TestBed } from '@angular/core/testing';

import { MunicipalService } from './municipal.service';

describe('MunicipalService', () => {
  let service: MunicipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
