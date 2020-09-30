import { TestBed } from '@angular/core/testing';

import { DatabaseAdapterService } from './database-adapter.service';

describe('DatabaseAdapterService', () => {
  let service: DatabaseAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
