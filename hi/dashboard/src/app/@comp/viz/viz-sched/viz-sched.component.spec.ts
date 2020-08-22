import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizSchedComponent } from './viz-sched.component';

describe('VizSchedComponent', () => {
  let component: VizSchedComponent;
  let fixture: ComponentFixture<VizSchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizSchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizSchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
