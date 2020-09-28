import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalAdminReturneePcrComponent } from './municipal-admin-returnee-pcr.component';

describe('MunicipalAdminReturneePcrComponent', () => {
  let component: MunicipalAdminReturneePcrComponent;
  let fixture: ComponentFixture<MunicipalAdminReturneePcrComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalAdminReturneePcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalAdminReturneePcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
