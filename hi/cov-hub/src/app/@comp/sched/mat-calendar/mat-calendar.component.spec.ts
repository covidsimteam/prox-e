import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCalendarComponent } from './mat-calendar.component';

describe('MatCalendarComponent', () => {
  let component: MatCalendarComponent;
  let fixture: ComponentFixture<MatCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
