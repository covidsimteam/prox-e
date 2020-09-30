import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrDemandComponent } from './pcr-demand.component';

describe('PcrDemandComponent', () => {
  let component: PcrDemandComponent;
  let fixture: ComponentFixture<PcrDemandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcrDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
