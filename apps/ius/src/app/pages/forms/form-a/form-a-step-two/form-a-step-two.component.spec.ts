import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepTwoComponent } from './form-a-step-two.component';

describe('FormAStepTwoComponent', () => {
  let component: FormAStepTwoComponent;
  let fixture: ComponentFixture<FormAStepTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
