import { TestBed } from '@angular/core/testing';

import { UserUiService } from './user-ui.service';

describe('UserUiService', () => {
  let service: UserUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
