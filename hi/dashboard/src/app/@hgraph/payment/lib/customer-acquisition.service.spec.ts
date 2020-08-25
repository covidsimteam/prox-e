import { TestBed } from '@angular/core/testing';

import { CustomerAcquisitionService } from './customer-acquisition.service';

describe('CustomerAcquisitionService', () => {
  let service: CustomerAcquisitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAcquisitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
