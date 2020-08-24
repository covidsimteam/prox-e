import { TestBed } from '@angular/core/testing';

import { MedAiProcessorService } from './med-ai-processor.service';

describe('MedAiProcessorService', () => {
  let service: MedAiProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedAiProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
