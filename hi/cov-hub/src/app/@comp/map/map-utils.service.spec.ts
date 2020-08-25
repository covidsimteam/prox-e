import { TestBed } from '@angular/core/testing';

import { MapUtilsService } from './map-utils.service';

describe('MapUtilsService', () => {
  let service: MapUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
