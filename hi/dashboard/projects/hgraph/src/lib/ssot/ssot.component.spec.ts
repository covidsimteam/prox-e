import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsotComponent } from './ssot.component';

describe('SsotComponent', () => {
  let component: SsotComponent;
  let fixture: ComponentFixture<SsotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
