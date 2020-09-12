import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivetasksComponent } from './activetasks.component';

describe('ActivetasksComponent', () => {
  let component: ActivetasksComponent;
  let fixture: ComponentFixture<ActivetasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivetasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivetasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
