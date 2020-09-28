import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormAStepSevenComponent } from './form-a-step-seven.component';

describe('FormAStepSevenComponent', () => {
  let component: FormAStepSevenComponent;
  let fixture: ComponentFixture<FormAStepSevenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
