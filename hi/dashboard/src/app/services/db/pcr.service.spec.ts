import { TestBed, inject } from '@angular/core/testing';

import { PcrService } from './pcr.service';
import { appConf, AppConf } from '../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PcrService', () => {
  let service: PcrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(PcrService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
