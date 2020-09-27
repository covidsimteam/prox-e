import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebTableCheckboxComponent } from './neb-checkbox.component';

describe('NebTableCheckboxComponent', () => {
  let component: NebTableCheckboxComponent;
  let fixture: ComponentFixture<NebTableCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebTableCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebTableCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
