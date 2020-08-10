import { TestBed, inject } from '@angular/core/testing';

import { AuthCookieService } from './auth-cookie.service';
import { AppConf, appConf } from '../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthCookieService', () => {
  let service: AuthCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(AuthCookieService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
