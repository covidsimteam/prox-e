import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormCheckboxComponent } from './mat-checkbox.component';

describe('MatFormCheckboxComponent', () => {
  let component: MatFormCheckboxComponent;
  let fixture: ComponentFixture<MatFormCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
