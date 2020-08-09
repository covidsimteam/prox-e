import { TestBed, inject } from '@angular/core/testing';

import { SpatialService } from './spatial.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConf, appConf } from '../../../environments/environment';

describe('SpatialService', () => {
  let service: SpatialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(SpatialService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
