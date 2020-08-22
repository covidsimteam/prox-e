import { TestBed } from '@angular/core/testing';

import { MunicipatientsFiltersService } from './municipatients-filters.service';

describe('MunicipatientsFiltersService', () => {
  let service: MunicipatientsFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipatientsFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
