import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFfwdComponent } from './form-ffwd.component';

describe('FormFfwdComponent', () => {
  let component: FormFfwdComponent;
  let fixture: ComponentFixture<FormFfwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFfwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFfwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
