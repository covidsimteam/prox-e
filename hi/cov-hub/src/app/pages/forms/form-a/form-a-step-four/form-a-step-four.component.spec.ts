import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepFourComponent } from './form-a-step-four.component';

describe('FormAStepFourComponent', () => {
  let component: FormAStepFourComponent;
  let fixture: ComponentFixture<FormAStepFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
