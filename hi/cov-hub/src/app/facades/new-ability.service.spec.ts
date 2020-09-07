import { TestBed } from '@angular/core/testing';

import { NewAbilityService } from './new-ability.service';

describe('NewAbilityService', () => {
  let service: NewAbilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAbilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
