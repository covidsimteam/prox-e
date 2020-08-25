import { TestBed } from '@angular/core/testing';

import { EndToEndService } from './end-to-end.service';

describe('EndToEndService', () => {
  let service: EndToEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndToEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
