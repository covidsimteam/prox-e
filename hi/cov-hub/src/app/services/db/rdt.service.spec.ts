import { TestBed, inject } from '@angular/core/testing';

import { RdtService } from './rdt.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConf, appConf } from '../../../environments/environment';

describe('RdtService', () => {
  let service: RdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(RdtService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
