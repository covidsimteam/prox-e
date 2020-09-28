import { TestBed, inject } from '@angular/core/testing';

import { PouchDBService } from './pouchdb.service';
import { appConf, AppConf } from '../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PouchDBService', () => {
  let service: PouchDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AppConf, useValue: appConf }],
    });
    service = TestBed.inject(PouchDBService);
  });

  it('should be created', inject([AppConf], () => {
    expect(service).toBeTruthy();
  }));
});
