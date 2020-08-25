import { TestBed } from '@angular/core/testing';

import { GraknAdapterService } from './grakn-adapter.service';

describe('GraknAdapterService', () => {
  let service: GraknAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraknAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
