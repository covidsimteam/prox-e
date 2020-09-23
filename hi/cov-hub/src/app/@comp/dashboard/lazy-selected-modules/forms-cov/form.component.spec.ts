import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: CovFormComponent;
  let fixture: ComponentFixture<CovFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
