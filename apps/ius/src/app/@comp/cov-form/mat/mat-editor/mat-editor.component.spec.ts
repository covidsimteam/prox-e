import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormEditorComponent } from './mat-editor.component';

describe('MatFormEditorComponent', () => {
  let component: MatFormEditorComponent;
  let fixture: ComponentFixture<MatFormEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
