import { TestBed } from '@angular/core/testing';

import { AbstractBusService } from './abstract-bus.service';

describe('AbstractBusService', () => {
  let service: AbstractBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
