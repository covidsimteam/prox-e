import { TestBed } from '@angular/core/testing';

import { PopCultureService } from './pop-culture.service';

describe('PopCultureService', () => {
  let service: PopCultureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopCultureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
