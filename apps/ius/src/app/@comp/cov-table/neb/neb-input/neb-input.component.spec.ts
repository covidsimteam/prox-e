import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebTableInputComponent } from './neb-input.component';

describe('NebTableInputComponent', () => {
  let component: NebTableInputComponent;
  let fixture: ComponentFixture<NebTableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebTableInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebTableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
