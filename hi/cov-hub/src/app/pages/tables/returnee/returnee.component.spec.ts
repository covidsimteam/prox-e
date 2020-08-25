import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturneeComponent } from './returnee.component';

describe('ReturneeComponent', () => {
  let component: ReturneeComponent;
  let fixture: ComponentFixture<ReturneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturneeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
