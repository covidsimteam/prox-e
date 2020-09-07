import { TestBed } from '@angular/core/testing';

import { RoleCompResolveService } from './role-comp-resolve.service';

describe('RoleCompResolveService', () => {
  let service: RoleCompResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleCompResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
