import { TestBed } from '@angular/core/testing';

import { DashboardComponentService } from './dashboard-component.service';

describe('DashboardComponentService', () => {
  let service: DashboardComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
