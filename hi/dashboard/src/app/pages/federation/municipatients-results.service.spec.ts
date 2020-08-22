import { TestBed } from '@angular/core/testing';

import { MunicipatientsResultsService } from './municipatients-results.service';

describe('MunicipatientsResultsService', () => {
  let service: MunicipatientsResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipatientsResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
