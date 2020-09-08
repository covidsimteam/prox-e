import { TestBed } from '@angular/core/testing';

import { ElkAdapterService } from './elk-adapter.service';

describe('ElkAdapterService', () => {
  let service: ElkAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElkAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
