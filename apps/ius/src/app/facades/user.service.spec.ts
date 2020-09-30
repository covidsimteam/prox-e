import { TestBed } from '@angular/core/testing';

import { UserFacade } from './user.service';

describe('UserFacade', () => {
  let service: UserFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
