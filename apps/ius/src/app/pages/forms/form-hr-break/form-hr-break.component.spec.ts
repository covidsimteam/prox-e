import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHrBreakComponent } from './form-hr-break.component';

describe('FormHrBreakComponent', () => {
  let component: FormHrBreakComponent;
  let fixture: ComponentFixture<FormHrBreakComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHrBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHrBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
