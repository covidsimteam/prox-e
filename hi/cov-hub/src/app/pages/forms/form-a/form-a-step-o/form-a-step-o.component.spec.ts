import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAStepOComponent } from './form-a-step-o.component';

describe('FormAStepOComponent', () => {
  let component: FormAStepOComponent;
  let fixture: ComponentFixture<FormAStepOComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAStepOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAStepOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
