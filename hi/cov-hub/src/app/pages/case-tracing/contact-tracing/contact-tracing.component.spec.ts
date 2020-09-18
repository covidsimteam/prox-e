import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTracingComponent } from './contact-tracing.component';

describe('ContactTracingComponent', () => {
  let component: ContactTracingComponent;
  let fixture: ComponentFixture<ContactTracingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTracingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
