import { TestBed } from '@angular/core/testing';

import { FlowPipesService } from './flow-pipes.service';

describe('FlowPipesService', () => {
  let service: FlowPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
