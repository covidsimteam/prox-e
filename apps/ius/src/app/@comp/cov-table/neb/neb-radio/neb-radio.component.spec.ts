import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebTableRadioComponent } from './neb-radio.component';

describe('NebTableRadioComponent', () => {
  let component: NebTableRadioComponent;
  let fixture: ComponentFixture<NebTableRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebTableRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebTableRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
