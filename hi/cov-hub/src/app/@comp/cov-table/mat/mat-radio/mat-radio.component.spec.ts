import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableRadioComponent } from './mat-radio.component';

describe('MatTableRadioComponent', () => {
  let component: MatTableRadioComponent;
  let fixture: ComponentFixture<MatTableRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
