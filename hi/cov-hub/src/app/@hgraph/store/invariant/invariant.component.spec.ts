import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvariantComponent } from './invariant.component';

describe('InvariantComponent', () => {
  let component: InvariantComponent;
  let fixture: ComponentFixture<InvariantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvariantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
