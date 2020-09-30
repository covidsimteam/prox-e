import { TestBed } from '@angular/core/testing';

import { ZeromqAdapaterService } from './zeromq-adapater.service';

describe('ZeromqAdapaterService', () => {
  let service: ZeromqAdapaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeromqAdapaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
