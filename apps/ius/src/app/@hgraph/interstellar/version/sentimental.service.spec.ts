import { TestBed } from '@angular/core/testing';

import { SentimentalService } from './sentimental.service';

describe('SentimentalService', () => {
  let service: SentimentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentimentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
