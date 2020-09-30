import { TestBed } from '@angular/core/testing';

import { MunicipatientsAnnotatorsService } from './municipatients-annotators.service';

describe('MunicipatientsAnnotatorsService', () => {
  let service: MunicipatientsAnnotatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipatientsAnnotatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
