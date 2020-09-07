import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepThreeComponent } from './form-a-step-three.component';

describe('FormAStepThreeComponent', () => {
  let component: FormAStepThreeComponent;
  let fixture: ComponentFixture<FormAStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
