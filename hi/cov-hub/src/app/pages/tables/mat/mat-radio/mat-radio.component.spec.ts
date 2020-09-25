import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioComponent } from './mat-radio.component';

describe('MatRadioComponent', () => {
  let component: MatRadioComponent;
  let fixture: ComponentFixture<MatRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
