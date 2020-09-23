import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormAStepFiveComponent } from './form-a-step-five.component';

describe('FormAStepFiveComponent', () => {
  let component: FormAStepFiveComponent;
  let fixture: ComponentFixture<FormAStepFiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
