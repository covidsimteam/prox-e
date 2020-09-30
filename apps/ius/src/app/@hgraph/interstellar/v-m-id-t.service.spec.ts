import { TestBed } from '@angular/core/testing';

import { VMIdTService } from './v-m-id-t.service';

describe('VMIdTService', () => {
  let service: VMIdTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VMIdTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
