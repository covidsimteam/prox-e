import { TestBed, inject } from '@angular/core/testing';

import { CovidSimTeamService } from './covidsimteam.service';
import { AppConf, appConf } from '../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CovidSimTeamService', () => {
  let service: CovidSimTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(CovidSimTeamService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
