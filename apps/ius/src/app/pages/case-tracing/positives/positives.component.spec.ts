import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivesComponent } from './positives.component';

describe('PositivesComponent', () => {
  let component: PositivesComponent;
  let fixture: ComponentFixture<PositivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
