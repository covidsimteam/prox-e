import { TestBed } from '@angular/core/testing';

import { MunicipatientsService } from './municipatients.service';

describe('MunicipatientsService', () => {
  let service: MunicipatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
