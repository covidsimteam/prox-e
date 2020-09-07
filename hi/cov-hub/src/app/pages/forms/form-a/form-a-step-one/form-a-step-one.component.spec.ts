import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepOneComponent } from './form-a-step-one.component';

describe('FormAStepOneComponent', () => {
  let component: FormAStepOneComponent;
  let fixture: ComponentFixture<FormAStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
