import { TestBed } from '@angular/core/testing';

import { TranslationGenService } from './translation-gen.service';

describe('TranslationGenService', () => {
  let service: TranslationGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
