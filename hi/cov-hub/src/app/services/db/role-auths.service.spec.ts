import { TestBed } from '@angular/core/testing';

import { RoleAuthsService } from './role-auths.service';

describe('RoleAuthsService', () => {
  let service: RoleAuthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAuthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
