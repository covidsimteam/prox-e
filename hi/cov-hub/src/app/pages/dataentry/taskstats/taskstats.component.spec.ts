import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskstatsComponent } from './taskstats.component';

describe('TaskstatsComponent', () => {
  let component: TaskstatsComponent;
  let fixture: ComponentFixture<TaskstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
