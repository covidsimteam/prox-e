import { TestBed } from '@angular/core/testing';

import { ChartGenService } from './chart-gen.service';

describe('ChartGenService', () => {
  let service: ChartGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
