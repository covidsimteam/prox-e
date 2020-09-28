import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepOneAComponent } from './form-a-step-one-a.component';

describe('FormAStepOneAComponent', () => {
  let component: FormAStepOneAComponent;
  let fixture: ComponentFixture<FormAStepOneAComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepOneAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepOneAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
