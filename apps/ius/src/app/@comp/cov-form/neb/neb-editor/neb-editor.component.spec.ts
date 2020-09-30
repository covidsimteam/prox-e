import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebFormEditorComponent } from './neb-editor.component';

describe('NebFormEditorComponent', () => {
  let component: NebFormEditorComponent;
  let fixture: ComponentFixture<NebFormEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebFormEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
