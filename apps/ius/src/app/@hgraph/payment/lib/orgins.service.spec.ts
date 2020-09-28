import { TestBed } from '@angular/core/testing';

import { OrginsService } from './orgins.service';

describe('OrginsService', () => {
  let service: OrginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
