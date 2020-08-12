import { TestBed, inject } from '@angular/core/testing';

import { EnvironmentService } from './environment.service';
import { AppConf, appConf } from '../../../environments/environment';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});

