import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { appConf, AppConf } from '../../../environments/environment';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', inject([AppConf], () => {
    expect(guard).toBeTruthy();
  }));
});
