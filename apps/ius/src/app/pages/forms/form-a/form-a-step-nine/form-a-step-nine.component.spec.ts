import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormAStepNineComponent } from './form-a-step-nine.component';

describe('FormAStepNineComponent', () => {
  let component: FormAStepNineComponent;
  let fixture: ComponentFixture<FormAStepNineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
