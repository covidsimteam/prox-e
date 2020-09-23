import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturneeDetailsComponent } from './returnee-details.component';

describe('ReturneeDetailsComponent', () => {
  let component: ReturneeDetailsComponent;
  let fixture: ComponentFixture<ReturneeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturneeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturneeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
