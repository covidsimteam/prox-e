import { TestBed } from '@angular/core/testing';

import { FacilityAssistService } from './facility-assist.service';

describe('FacilityAssistService', () => {
  let service: FacilityAssistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityAssistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
