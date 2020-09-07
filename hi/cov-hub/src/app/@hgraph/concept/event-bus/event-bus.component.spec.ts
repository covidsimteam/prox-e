import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBusComponent } from './event-bus.component';

describe('EventBusComponent', () => {
  let component: EventBusComponent;
  let fixture: ComponentFixture<EventBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
