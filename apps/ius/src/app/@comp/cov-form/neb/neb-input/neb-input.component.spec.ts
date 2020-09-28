import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebFormInputComponent } from './neb-input.component';

describe('NebFormInputComponent', () => {
  let component: NebFormInputComponent;
  let fixture: ComponentFixture<NebFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
