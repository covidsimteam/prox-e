import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalAdminComponent } from './municipal-admin.component';

describe('MunicipalAdminComponent', () => {
  let component: MunicipalAdminComponent;
  let fixture: ComponentFixture<MunicipalAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
