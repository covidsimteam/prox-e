import { TestBed } from '@angular/core/testing';

import { SampleCollectionService } from './sample-collection.service';

describe('SampleCollectionService', () => {
  let service: SampleCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
