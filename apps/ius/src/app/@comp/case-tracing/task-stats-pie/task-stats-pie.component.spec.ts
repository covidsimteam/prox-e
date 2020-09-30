import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatsPieComponent } from './task-stats-pie.component';

describe('TaskStatsPieComponent', () => {
  let component: TaskStatsPieComponent;
  let fixture: ComponentFixture<TaskStatsPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStatsPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
