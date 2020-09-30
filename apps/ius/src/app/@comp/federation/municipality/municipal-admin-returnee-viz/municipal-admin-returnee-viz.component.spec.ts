import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalAdminReturneeVizComponent } from './municipal-admin-returnee-viz.component';

describe('MunicipalAdminReturneeVizComponent', () => {
  let component: MunicipalAdminReturneeVizComponent;
  let fixture: ComponentFixture<MunicipalAdminReturneeVizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalAdminReturneeVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalAdminReturneeVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
