import { TestBed } from '@angular/core/testing';

import { MIdtService } from './m-idt.service';

describe('MIdtService', () => {
  let service: MIdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MIdtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
