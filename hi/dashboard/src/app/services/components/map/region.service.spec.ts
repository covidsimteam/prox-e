import { TestBed, inject } from '@angular/core/testing';

import { RegionService } from './region.service';
import { AppConf, appConf } from '../../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegionService', () => {
  let service: RegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(RegionService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
