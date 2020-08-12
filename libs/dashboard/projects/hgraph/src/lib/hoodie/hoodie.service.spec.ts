import { TestBed } from '@angular/core/testing';

import { HoodieService } from './hoodie.service';

describe('HoodieService', () => {
  let service: HoodieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoodieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
