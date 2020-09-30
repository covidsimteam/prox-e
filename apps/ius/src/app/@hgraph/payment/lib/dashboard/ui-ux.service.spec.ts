import { TestBed } from '@angular/core/testing';

import { UiUxService } from './ui-ux.service';

describe('UiUxService', () => {
  let service: UiUxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiUxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
