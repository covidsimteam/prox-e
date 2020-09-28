import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebFormRadioComponent } from './neb-radio.component';

describe('NebFormRadioComponent', () => {
  let component: NebFormRadioComponent;
  let fixture: ComponentFixture<NebFormRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebFormRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebFormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
