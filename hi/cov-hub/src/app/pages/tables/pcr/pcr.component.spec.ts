import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrComponent } from './pcr.component';

describe('PcrComponent', () => {
  let component: PcrComponent;
  let fixture: ComponentFixture<PcrComponent>;

  beforeEach(async(() => {
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
