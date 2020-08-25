import { TestBed } from '@angular/core/testing';

import { ScpService } from './scp.service';

describe('ScpService', () => {
  let service: ScpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
