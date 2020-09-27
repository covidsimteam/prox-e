import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovScheduleComponent } from './cov-schedule.component';

describe('CovScheduleComponent', () => {
  let component: CovScheduleComponent;
  let fixture: ComponentFixture<CovScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
