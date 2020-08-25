import { TestBed } from '@angular/core/testing';

import { PrefsService } from './prefs.service';

describe('PrefsService', () => {
  let service: PrefsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
