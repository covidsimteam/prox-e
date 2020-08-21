import { TestBed } from '@angular/core/testing';

import { ZeromqAnnotationService } from './zeromq-annotation.service';

describe('ZeromqAnnotationService', () => {
  let service: ZeromqAnnotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeromqAnnotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
