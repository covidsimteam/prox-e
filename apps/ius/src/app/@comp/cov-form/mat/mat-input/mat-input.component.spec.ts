import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormInputComponent } from './mat-input.component';

describe('MatFormInputComponent', () => {
  let component: MatFormInputComponent;
  let fixture: ComponentFixture<MatFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
