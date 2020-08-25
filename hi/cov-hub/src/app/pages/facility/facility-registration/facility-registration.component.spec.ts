import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityRegistrationComponent } from './facility-registration.component';

describe('FacilityRegistrationComponent', () => {
  let component: FacilityRegistrationComponent;
  let fixture: ComponentFixture<FacilityRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
