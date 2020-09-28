import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebTableEditorComponent } from './neb-editor.component';

describe('NebTableEditorComponent', () => {
  let component: NebTableEditorComponent;
  let fixture: ComponentFixture<NebTableEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebTableEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebTableEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
