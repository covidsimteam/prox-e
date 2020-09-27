import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableEditorComponent } from './mat-editor.component';

describe('MatTableEditorComponent', () => {
  let component: MatTableEditorComponent;
  let fixture: ComponentFixture<MatTableEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
