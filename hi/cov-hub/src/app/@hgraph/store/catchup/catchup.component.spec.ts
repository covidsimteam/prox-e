import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchupComponent } from './catchup.component';

describe('CatchupComponent', () => {
  let component: CatchupComponent;
  let fixture: ComponentFixture<CatchupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
