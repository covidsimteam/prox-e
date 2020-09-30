import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalAdminReturneeComponent } from './municipal-admin-returnee.component';

describe('MunicipalAdminReturneeComponent', () => {
  let component: MunicipalAdminReturneeComponent;
  let fixture: ComponentFixture<MunicipalAdminReturneeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalAdminReturneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalAdminReturneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
