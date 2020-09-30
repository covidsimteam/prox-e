import { TestBed } from '@angular/core/testing';

import { B1B2SwitchService } from './b1-b2-switch.service';

describe('B1B2SwitchService', () => {
  let service: B1B2SwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B1B2SwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
