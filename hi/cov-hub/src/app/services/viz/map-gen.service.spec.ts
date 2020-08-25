import { TestBed } from '@angular/core/testing';

import { MapGenService } from './map-gen.service';

describe('MapGenService', () => {
  let service: MapGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
