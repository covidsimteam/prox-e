import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepOneBComponent } from './form-a-step-one-b.component';

describe('FormAStepOneBComponent', () => {
  let component: FormAStepOneBComponent;
  let fixture: ComponentFixture<FormAStepOneBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepOneBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepOneBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
