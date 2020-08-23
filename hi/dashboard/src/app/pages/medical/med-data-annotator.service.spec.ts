import { TestBed } from '@angular/core/testing';

import { MedDataAnnotatorService } from './med-data-annotator.service';

describe('MedDataAnnotatorService', () => {
  let service: MedDataAnnotatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedDataAnnotatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
