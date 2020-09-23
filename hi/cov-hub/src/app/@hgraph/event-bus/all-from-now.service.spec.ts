import { TestBed } from '@angular/core/testing';

import { AllFromNowService } from './all-from-now.service';

describe('AllFromNowService', () => {
  let service: AllFromNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFromNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
