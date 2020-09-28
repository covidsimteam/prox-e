import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebFormCheckboxComponent } from './neb-checkbox.component';

describe('NebFormCheckboxComponent', () => {
  let component: NebFormCheckboxComponent;
  let fixture: ComponentFixture<NebFormCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebFormCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
