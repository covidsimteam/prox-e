import { TestBed } from '@angular/core/testing';

import { SemanticService } from './semantic.service';

describe('SemanticService', () => {
  let service: SemanticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemanticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
