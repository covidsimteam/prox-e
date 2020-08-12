import { TestBed } from '@angular/core/testing';

import { KnowledgeTransformsService } from './knowledge-transforms.service';

describe('KnowledgeTransformsService', () => {
  let service: KnowledgeTransformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgeTransformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
