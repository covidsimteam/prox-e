import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedComponent } from './sched.component';

describe('SchedComponent', () => {
  let component: SchedComponent;
  let fixture: ComponentFixture<SchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
