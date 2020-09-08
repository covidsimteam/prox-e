import { TestBed, inject } from '@angular/core/testing';

import { ReturneeService } from './returnee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConf, appConf } from '../../../environments/environment';

describe('ReturneeService', () => {
  let service: ReturneeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(ReturneeService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
