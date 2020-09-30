import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReturneesComponent } from './all-returnees.component';

describe('AllReturneesComponent', () => {
  let component: AllReturneesComponent;
  let fixture: ComponentFixture<AllReturneesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReturneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReturneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
