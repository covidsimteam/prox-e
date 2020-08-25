import { TestBed } from '@angular/core/testing';

import { PipeStructsService } from './pipe-structs.service';

describe('PipeStructsService', () => {
  let service: PipeStructsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeStructsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
