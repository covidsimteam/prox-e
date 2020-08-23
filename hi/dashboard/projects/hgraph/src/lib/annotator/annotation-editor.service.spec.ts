import { TestBed } from '@angular/core/testing';

import { AnnotationEditorService } from './annotation-editor.service';

describe('AnnotationEditorService', () => {
  let service: AnnotationEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
