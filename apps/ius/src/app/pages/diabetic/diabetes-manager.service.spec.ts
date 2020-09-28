import { TestBed } from '@angular/core/testing';

import { DiabetesManagerService } from './diabetes-manager.service';

describe('DiabetesManagerService', () => {
  let service: DiabetesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
