import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormB1Component } from './form-b1.component';

describe('FormB1Component', () => {
  let component: FormB1Component;
  let fixture: ComponentFixture<FormB1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormB1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
