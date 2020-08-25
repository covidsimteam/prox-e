import { TestBed } from '@angular/core/testing';

import { TestAnnotationsService } from './test-annotations.service';

describe('TestAnnotationsService', () => {
  let service: TestAnnotationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAnnotationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
