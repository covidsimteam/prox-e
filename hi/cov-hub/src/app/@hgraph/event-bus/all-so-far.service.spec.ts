import { TestBed } from '@angular/core/testing';

import { AllSoFarService } from './all-so-far.service';

describe('AllSoFarService', () => {
  let service: AllSoFarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSoFarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
