import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableInputComponent } from './mat-input.component';

describe('MatTableInputComponent', () => {
  let component: MatTableInputComponent;
  let fixture: ComponentFixture<MatTableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
