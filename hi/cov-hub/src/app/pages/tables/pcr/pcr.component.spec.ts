import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrComponent } from './pcr.component';

describe('PcrComponent', () => {
  let component: PcrComponent;
  let fixture: ComponentFixture<PcrComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcrComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
