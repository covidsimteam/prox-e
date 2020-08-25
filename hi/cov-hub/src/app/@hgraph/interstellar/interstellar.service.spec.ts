import { TestBed } from '@angular/core/testing';

import { InterstellarService } from './interstellar.service';

describe('InterstellarService', () => {
  let service: InterstellarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterstellarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
