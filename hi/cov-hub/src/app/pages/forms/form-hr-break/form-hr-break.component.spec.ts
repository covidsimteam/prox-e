import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHrBreakComponent } from './form-hr-break.component';

describe('FormHrBreakComponent', () => {
  let component: FormHrBreakComponent;
  let fixture: ComponentFixture<FormHrBreakComponent>;

  beforeEach(async(() => {
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
