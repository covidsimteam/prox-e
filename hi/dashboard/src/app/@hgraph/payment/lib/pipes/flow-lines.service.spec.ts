import { TestBed } from '@angular/core/testing';

import { FlowLinesService } from './flow-lines.service';

describe('FlowLinesService', () => {
  let service: FlowLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
