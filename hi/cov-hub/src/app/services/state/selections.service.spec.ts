import { TestBed } from '@angular/core/testing';

import { SelectionsService } from './selections.service';

describe('SelectionsService', () => {
  let service: SelectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
