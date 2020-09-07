import { TestBed } from '@angular/core/testing';

import { SubService } from './sub.service';

describe('SubService', () => {
  let service: SubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
