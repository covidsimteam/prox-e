import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerderComponent } from './herder.component';

describe('HerderComponent', () => {
  let component: HerderComponent;
  let fixture: ComponentFixture<HerderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HerderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
