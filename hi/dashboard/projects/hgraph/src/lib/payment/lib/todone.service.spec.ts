import { TestBed } from '@angular/core/testing';

import { TodoneService } from './todone.service';

describe('TodoneService', () => {
  let service: TodoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
