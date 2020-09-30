import { TestBed } from '@angular/core/testing';

import { PipelinesService } from './pipelines.service';

describe('PipelinesService', () => {
  let service: PipelinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipelinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
