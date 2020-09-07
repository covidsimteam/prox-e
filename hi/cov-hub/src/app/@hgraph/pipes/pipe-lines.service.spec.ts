import { TestBed } from '@angular/core/testing';

import { PipeLinesService } from './pipe-lines.service';

describe('PipeLinesService', () => {
  let service: PipeLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
