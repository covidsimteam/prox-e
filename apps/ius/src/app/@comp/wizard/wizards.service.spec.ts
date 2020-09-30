import { TestBed } from '@angular/core/testing';

import { WizardsService } from './wizards.service';

describe('WizardsService', () => {
  let service: WizardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
