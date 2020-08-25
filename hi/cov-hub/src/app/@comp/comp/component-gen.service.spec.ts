import { TestBed } from '@angular/core/testing';

import { ComponentGenService } from './component-gen.service';

describe('ComponentGenService', () => {
  let service: ComponentGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
