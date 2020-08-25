import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivesProfilesComponent } from './positives-profiles.component';

describe('PositivesProfilesComponent', () => {
  let component: PositivesProfilesComponent;
  let fixture: ComponentFixture<PositivesProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositivesProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivesProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
