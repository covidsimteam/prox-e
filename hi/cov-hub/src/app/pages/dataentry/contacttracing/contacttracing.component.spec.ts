import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttracingComponent } from './contacttracing.component';

describe('ContacttracingComponent', () => {
  let component: ContacttracingComponent;
  let fixture: ComponentFixture<ContacttracingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacttracingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacttracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
