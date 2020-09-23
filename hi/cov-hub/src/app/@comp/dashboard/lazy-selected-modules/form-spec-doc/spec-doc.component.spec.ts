import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecDocComponent } from './spec-doc.component';

describe('SpecDocComponent', () => {
  let component: SpecDocComponent;
  let fixture: ComponentFixture<SpecDocComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
