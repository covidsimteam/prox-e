import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAComponent } from './form-a.component';

describe('FormAComponent', () => {
  let component: FormAComponent;
  let fixture: ComponentFixture<FormAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
