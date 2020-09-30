import { TestBed } from '@angular/core/testing';

import { MapSeroService } from './map-sero.service';

describe('MapSeroService', () => {
  let service: MapSeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapSeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
