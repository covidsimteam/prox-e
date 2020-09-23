import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdrComponent } from './xdr.component';

describe('XdrComponent', () => {
  let component: XdrComponent;
  let fixture: ComponentFixture<XdrComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ XdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
