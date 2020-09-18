import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepFiveComponent } from './form-a-step-five.component';

describe('FormAStepFiveComponent', () => {
  let component: FormAStepFiveComponent;
  let fixture: ComponentFixture<FormAStepFiveComponent>;

  beforeEach(async(() => {
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
