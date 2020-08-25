import { TestBed } from '@angular/core/testing';

import { VizComposerService } from './viz-composer.service';

describe('VizComposerService', () => {
  let service: VizComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VizComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
