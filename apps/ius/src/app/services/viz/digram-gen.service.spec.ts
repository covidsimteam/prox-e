import { TestBed } from '@angular/core/testing';

import { DigramGenService } from './digram-gen.service';

describe('DigramGenService', () => {
  let service: DigramGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigramGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
