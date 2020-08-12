import { TestBed } from '@angular/core/testing';

import { DBCommonsService } from './db-commons.service';

describe('DBCommonsService', () => {
  let service: DBCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
