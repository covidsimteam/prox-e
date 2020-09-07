import { TestBed } from '@angular/core/testing';

import { DatabasesService } from './databases.service';

describe('DatabasesService', () => {
  let service: DatabasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
