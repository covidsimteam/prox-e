import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovFormFfwdComponent } from './form-ffwd.component';

describe('FormFfwdComponent', () => {
  let component: CovFormFfwdComponent;
  let fixture: ComponentFixture<CovFormFfwdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovFormFfwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovFormFfwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
