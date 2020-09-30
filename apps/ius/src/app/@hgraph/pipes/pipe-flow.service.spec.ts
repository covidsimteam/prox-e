import { TestBed } from '@angular/core/testing';

import { PipeFlowService } from './pipe-flow.service';

describe('PipeFlowService', () => {
  let service: PipeFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
