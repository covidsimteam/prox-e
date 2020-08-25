import { TestBed } from '@angular/core/testing';

import { AppendService } from './append.service';

describe('AppendService', () => {
  let service: AppendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
