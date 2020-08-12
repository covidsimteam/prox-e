import { TestBed } from '@angular/core/testing';

import { AgentModelsService } from './agent-models.service';

describe('AgentModelsService', () => {
  let service: AgentModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
