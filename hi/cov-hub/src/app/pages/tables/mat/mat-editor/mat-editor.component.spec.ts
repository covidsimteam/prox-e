import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatEditorComponent } from './mat-editor.component';

describe('MatEditorComponent', () => {
  let component: MatEditorComponent;
  let fixture: ComponentFixture<MatEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
