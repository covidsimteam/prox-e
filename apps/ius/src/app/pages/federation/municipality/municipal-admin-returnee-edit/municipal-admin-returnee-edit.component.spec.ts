import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalAdminReturneeEditComponent } from './municipal-admin-returnee-edit.component';

describe('MunicipalAdminReturneeEditComponent', () => {
  let component: MunicipalAdminReturneeEditComponent;
  let fixture: ComponentFixture<MunicipalAdminReturneeEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalAdminReturneeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalAdminReturneeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
