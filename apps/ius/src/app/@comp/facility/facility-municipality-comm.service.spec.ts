import { TestBed } from '@angular/core/testing';

import { FacilityMunicipalityCommService } from './facility-municipality-comm.service';

describe('FacilityMunicipalityCommService', () => {
  let service: FacilityMunicipalityCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityMunicipalityCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
