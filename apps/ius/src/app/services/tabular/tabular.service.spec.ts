import { TestBed } from '@angular/core/testing';

import { TabularService } from './tabular.service';

describe('TabularService', () => {
  let service: TabularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
