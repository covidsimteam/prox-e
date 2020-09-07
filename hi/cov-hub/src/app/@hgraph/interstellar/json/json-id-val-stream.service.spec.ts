import { TestBed } from '@angular/core/testing';

import { JsonIdValStreamService } from './json-id-val-stream.service';

describe('JsonIdValStreamService', () => {
  let service: JsonIdValStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonIdValStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
