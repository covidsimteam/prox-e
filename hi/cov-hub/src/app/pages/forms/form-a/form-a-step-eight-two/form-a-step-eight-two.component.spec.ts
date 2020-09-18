import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepEightTwoComponent } from './form-a-step-eight-two.component';

describe('FormAStepEightTwoComponent', () => {
  let component: FormAStepEightTwoComponent;
  let fixture: ComponentFixture<FormAStepEightTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepEightTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepEightTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
