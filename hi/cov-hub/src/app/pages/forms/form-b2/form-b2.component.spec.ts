import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormB2Component } from './form-b2.component';

describe('FormB2Component', () => {
  let component: FormB2Component;
  let fixture: ComponentFixture<FormB2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormB2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
