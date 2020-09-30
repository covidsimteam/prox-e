import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAssistComponent } from './facility-assist.component';

describe('FacilityAssistComponent', () => {
  let component: FacilityAssistComponent;
  let fixture: ComponentFixture<FacilityAssistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityAssistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
