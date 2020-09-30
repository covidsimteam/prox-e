import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNumbersComponent } from './horizontal-numbers.component';

describe('HorizontalNumbersComponent', () => {
  let component: HorizontalNumbersComponent;
  let fixture: ComponentFixture<HorizontalNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
