import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepSixComponent } from './form-a-step-six.component';

describe('FormAStepSixComponent', () => {
  let component: FormAStepSixComponent;
  let fixture: ComponentFixture<FormAStepSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
