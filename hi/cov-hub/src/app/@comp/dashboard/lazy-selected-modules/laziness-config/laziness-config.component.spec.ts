import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazinessConfigComponent } from './laziness-config.component';

describe('LazinessConfigComponent', () => {
  let component: LazinessConfigComponent;
  let fixture: ComponentFixture<LazinessConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LazinessConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazinessConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
