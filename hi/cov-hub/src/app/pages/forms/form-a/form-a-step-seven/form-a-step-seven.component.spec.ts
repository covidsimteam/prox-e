import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepSevenComponent } from './form-a-step-seven.component';

describe('FormAStepSevenComponent', () => {
  let component: FormAStepSevenComponent;
  let fixture: ComponentFixture<FormAStepSevenComponent>;

  beforeEach(async(() => {
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
