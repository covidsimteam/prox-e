import { TestBed } from '@angular/core/testing';

import { FoldSysService } from './fold-sys.service';

describe('FoldSysService', () => {
  let service: FoldSysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoldSysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
