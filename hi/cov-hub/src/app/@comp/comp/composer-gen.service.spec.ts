import { TestBed } from '@angular/core/testing';

import { ComposerGenService } from './composer-gen.service';

describe('ComposerGenService', () => {
  let service: ComposerGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
