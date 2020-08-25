import { TestBed } from '@angular/core/testing';

import { HerderService } from './herder.service';

describe('HerderService', () => {
  let service: HerderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
