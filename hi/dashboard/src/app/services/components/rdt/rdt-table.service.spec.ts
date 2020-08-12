import { TestBed } from '@angular/core/testing';

import { RdtTableService } from './rdt-table.service';

describe('RdtTableService', () => {
  let service: RdtTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdtTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
